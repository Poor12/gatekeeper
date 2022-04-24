# Karmada集成OPA

这篇文档主要描述怎样在Karmada控制面上安装并使用OPA（Gatekeeper），并给出了一个具体的运行示例。

## 环境

- Karmada 1.1.0
- Gatekeeper v3.8.0-rc.1

## 安装Gatekeeper组件

文档使用了Gatekeeper最新发布的v3.8.0版本，安装所使用的yaml来自于[here](https://github.com/open-policy-agent/gatekeeper/blob/master/deploy/gatekeeper.yaml). 

Gatekeeper在OPA的基础上定制了多种CRD，并融入Admission Controller的体系中，来实现策略的自动化管理。架构图参考如下图所示。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0590488951/p143242.png)

Gatekeeper的部署内容包括如下：
1. 具有控制器与webhook拦截作用的audit-controller与controller-manager。以上组件及其相关的service、RBAC资源将部署至Karmada-host平面，使控制器与webhook后端实例能够正常运行。另外，上述的controller采用kubernetes-sigs/controller-runtime进行编写，可通过配置manager的--kubeconfig参数来配置Kubeclient具体指向的APIServer。
因此，可通过secret来配置对应Karmada-apiserver context的Kubeconfig，并将secret通过Volume的形式挂载在controller中，使controller能够监听用户在Karmada控制面所下发的策略模板与策略实例。
   
2. 预置的CRD，包括策略模板CRD、模板状态CRD等。上述CRD将统一安装在karmada控制面中。

3. Gatekeeper提供的MutatingWebhookConfiguration与ValidatingWebhookConfiguration。上述配置将统一安装在karmada控制面中，同时由于GateKeeper原生所提供的webhook采用service形式的clientconfig，但在karmada中，webhook配置与具体的service分别在karmada-apiserver与karmada-host两个平面，因此这里参照karmada原生的webhook形式，修改为以url表示的clientconfig。

## Gatekeeper几个适配点
1. 以audit-controller为例，控制器的调和过程如下：用户在创建一个具体的策略模板时，实际上创建了一个自定义的constrainttemplate.templates.gatekeeper.sh的CR，controller最终会根据这个CR创建出XXXX.constraints.gatekeeper.sh的CRD，中间调和的过程会创建出一个constrainttemplatepodstatuses.status.gatekeeper.sh的CR，名称由控制器Pod名字和自定义的策略模板名字拼接而成，该CR通过status字段记录生成CRD过程中出现的错误（包括转换错误、rego表达式错误等），并且通过OwnerReference填入控制器Pod的信息从而被Kubernetes的gc controller管理。
在适配Karmada的过程中，由于CRD与Pod在不同的控制面，类似于在集群外部署，会出现无法创建该status对象的问题。目前可通过在karmada控制面内创建虚拟的Pod，配置controller的环境变量Pod_Name与Pod_NameSpace来指向该虚拟的Pod来规避该问题。

2. controller-manager在启动时会访问karmada-apiserver获取对应的存放webhook ca等信息的secret，同时该secret又以volume的形式挂载在容器内，因此需要在两个控制面内都创建该webhook所对应的secret。但由于controller-manager在生成证书时只更新了karmada控制面的secret，而控制器内则通过校验实际挂载在容器内的secret对应的目录是否存在来判断证书是否准备好，会导致webhook无法启动。
因此，在首次启动失败后，需要将控制面更新的secret复制到karmada-host的secret上，重启controller-manager即可正常启动webhook。
   
## 在Karmada上使用Gatekeeper
1. 依次在karmada-apiserver和karmada-host上部署对应的组件。
```console
kubectl config use-context karmada-apiserver
kubectl apply -f gatekeeper-apiserver.yaml
kubectl config use-context karmada-host
kubectl apply -f gatekeeper-host.yaml
```
2. 运行Gatekeeper所提供的官方示例, 示例所使用的yaml来自于[here](https://github.com/open-policy-agent/gatekeeper/blob/master/demo).
规则生效即代表在Karmada上运行Gatekeeper成功。
```console
kubectl config use-context karmada-apiserver
kubectl apply -f k8srequiredlabels_template.yaml
kubectl apply -f all_ns_must_have_gatekeeper.yaml
```

