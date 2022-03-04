"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7322],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2488:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"externaldata",title:"External Data"},l=void 0,p={unversionedId:"externaldata",id:"version-v3.7.x/externaldata",title:"External Data",description:"\u2757 This feature is still in alpha stage, so the final form can still change (feedback is welcome!).",source:"@site/versioned_docs/version-v3.7.x/externaldata.md",sourceDirName:".",slug:"/externaldata",permalink:"/gatekeeper/website/docs/externaldata",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/externaldata.md",tags:[],version:"v3.7.x",frontMatter:{id:"externaldata",title:"External Data"},sidebar:"version-v3.7.x/docs",previous:{title:"Constraint Templates",permalink:"/gatekeeper/website/docs/constrainttemplates"},next:{title:"The gator CLI",permalink:"/gatekeeper/website/docs/gator"}},d={},u=[{value:"Motivation",id:"motivation",level:2},{value:"Enabling external data support",id:"enabling-external-data-support",level:2},{value:"YAML",id:"yaml",level:3},{value:"Helm",id:"helm",level:3},{value:"Dev/Test",id:"devtest",level:3},{value:"Providers",id:"providers",level:2},{value:"Provider implementation",id:"provider-implementation",level:2},{value:"Gatekeeper Provider custom resource",id:"gatekeeper-provider-custom-resource",level:2},{value:"External data for Gatekeeper validating webhook",id:"external-data-for-gatekeeper-validating-webhook",level:2},{value:"API",id:"api",level:2},{value:"Version v1alpha1",id:"version-v1alpha1",level:3},{value:"ProviderRequest",id:"providerrequest",level:4},{value:"ProviderResponse",id:"providerresponse",level:4}],m={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2757 This feature is still in alpha stage, so the final form can still change (feedback is welcome!).")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udea7  Mutation is not yet supported with external data.")),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Gatekeeper provides various means to mutate and validate Kubernetes resources. However, in many of these scenarios this data is either built-in, static or user defined. With external data feature, we are enabling Gatekeeper to interface with various external data sources, such as image registries, using a provider-based model."),(0,o.kt)("p",null,"A similar way to connect with an external data source can be done today using OPA's built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"http.send")," functionality. However, there are limitations to this approach."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gatekeeper does not support Rego policies for mutation, which cannot use the OPA ",(0,o.kt)("inlineCode",{parentName:"li"},"http.send")," built-in function."),(0,o.kt)("li",{parentName:"ul"},"Security concerns due to:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if template authors are not trusted, it will potentially give template authors access to the in-cluster network."),(0,o.kt)("li",{parentName:"ul"},"if template authors are trusted, authors will need to be careful on how rego is written to avoid injection attacks.")))),(0,o.kt)("p",null,"Key benefits provided by the external data solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Addresses security concerns by:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Restricting which hosts a user can access."),(0,o.kt)("li",{parentName:"ul"},"Providing an interface for making requests, which allows Gatekeeper to better handle things like escaping strings."))),(0,o.kt)("li",{parentName:"ul"},"Addresses common patterns with a single provider, e.g. image tag-to-digest mutation, which can be leveraged by multiple scenarios (e.g. validating image signatures or vulnerabilities)."),(0,o.kt)("li",{parentName:"ul"},"Provider model creates a common interface for extending Gatekeeper with external data.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It allows for separation of concerns between the implementation that allows access to external data and the actual policy being evaluated."),(0,o.kt)("li",{parentName:"ul"},"Developers and consumers of data sources can rely on that common protocol to ease authoring of both constraint templates and data sources."),(0,o.kt)("li",{parentName:"ul"},'Makes change management easier as users of an external data provider should be able to tell whether upgrading it will break existing constraint templates. (once external data API is stable, our goal is to have that answer always be "no")'))),(0,o.kt)("li",{parentName:"ul"},"Performance benefits as Gatekeeper can now directly control caching and which values are significant for caching, which increases the likelihood of cache hits.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For mutation, we can batch requests via lazy evaluation."),(0,o.kt)("li",{parentName:"ul"},"For validation, we make batching easier via ",(0,o.kt)("a",{parentName:"li",href:"#external-data-for-Gatekeeper-validating-webhook"},(0,o.kt)("inlineCode",{parentName:"a"},"external_data"))," Rego function design.")))),(0,o.kt)("h2",{id:"enabling-external-data-support"},"Enabling external data support"),(0,o.kt)("h3",{id:"yaml"},"YAML"),(0,o.kt)("p",null,"You can enable external data support by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--enable-external-data")," in gatekeeper audit and controller-manager deployment arguments."),(0,o.kt)("h3",{id:"helm"},"Helm"),(0,o.kt)("p",null,"You can also enable external data by installing or upgrading Helm chart by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"enableExternalData=true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"helm install gatekeeper/gatekeeper --name-template=gatekeeper --namespace gatekeeper-system --create-namespace \\\n    --set enableExternalData=true \\\n    --set controllerManager.dnsPolicy=ClusterFirst,audit.dnsPolicy=ClusterFirst\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that setting dnsPolicy is a workaround for a bug that is already fixed and will be available in a future release.")),(0,o.kt)("h3",{id:"devtest"},"Dev/Test"),(0,o.kt)("p",null,"For dev/test deployments, use ",(0,o.kt)("inlineCode",{parentName:"p"},"make deploy ENABLE_EXTERNAL_DATA=true")),(0,o.kt)("h2",{id:"providers"},"Providers"),(0,o.kt)("p",null,"Providers are designed to be in-cluster components that can communicate with external data sources (such as image registries, Active Directory/LDAP directories, etc) and return data in a format that can be processed by Gatekeeper."),(0,o.kt)("p",null,"Example provider can be found at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/test/externaldata/dummy-provider"},"https://github.com/open-policy-agent/gatekeeper/tree/master/test/externaldata/dummy-provider")),(0,o.kt)("h2",{id:"provider-implementation"},"Provider implementation"),(0,o.kt)("p",null,"Provider is an HTTP server that listens on a port and responds to ",(0,o.kt)("a",{parentName:"p",href:"#ProviderRequest"},"ProviderRequest")," with ",(0,o.kt)("a",{parentName:"p",href:"#ProviderResponse"},"ProviderResponse"),"."),(0,o.kt)("p",null,"As part of ",(0,o.kt)("a",{parentName:"p",href:"#ProviderResponse"},"ProviderResponse"),", the provider can return a list of items. Each item is a JSON object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Key"),": the key that was sent to the provider"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Value"),": the value that was returned from the provider for that key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Error"),": an error message if the provider returned an error for that key")),(0,o.kt)("p",null,"If there is a system error, the provider should return the system error message in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SystemError")," field."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udcce Recommendation is for provider implementations to keep a timeout such as maximum of 1-2 seconds for the provider to respond.")),(0,o.kt)("p",null,"Example provider implementation: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/test/externaldata/dummy-provider/provider.go"},"https://github.com/open-policy-agent/gatekeeper/blob/master/test/externaldata/dummy-provider/provider.go")),(0,o.kt)("h2",{id:"gatekeeper-provider-custom-resource"},"Gatekeeper Provider custom resource"),(0,o.kt)("p",null,"Provider resource defines the provider and the configuration for it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: externaldata.gatekeeper.sh/v1alpha1\nkind: Provider\nmetadata:\n  name: my-provider\nspec:\n  url: http://<service-name>.<namespace>:<port>/<endpoint> # URL to the external data source (e.g., http://my-provider.my-namespace:8090/validate)\n  timeout: <timeout> # timeout value in seconds (e.g., 1). this is the timeout on the Provider custom resource, not the provider implementation.\n")),(0,o.kt)("h2",{id:"external-data-for-gatekeeper-validating-webhook"},"External data for Gatekeeper validating webhook"),(0,o.kt)("p",null,"External data adds a ",(0,o.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/extensions/#custom-built-in-functions-in-go"},"custom OPA built-in function")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"external_data")," to Rego. This function is used to query external data providers."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"external_data")," is a function that takes a request and returns a response. The request is a JSON object with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Provider"),": the name of the provider to query"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Keys"),": the list of keys to send to the provider")),(0,o.kt)("p",null,"e.g.,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rego"},'  # build a list of keys containing images for batching\n  my_list := [img | img = input.review.object.spec.template.spec.containers[_].image]\n\n  # send external data request\n  response := external_data({"provider": "my-provider", "keys": my_list})\n')),(0,o.kt)("p",null,"Response example: [","[",(0,o.kt)("inlineCode",{parentName:"p"},'"my-key"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"my-value"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),"]",", ","[",(0,o.kt)("inlineCode",{parentName:"p"},'"another-key"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},"42"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),"]",", ","[",(0,o.kt)("inlineCode",{parentName:"p"},'"bad-key"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"error message"'),"]","]"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udcce To avoid multiple calls to the same provider, recommendation is to batch the keys list to send a single request.")),(0,o.kt)("p",null,"Example template:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/blob/master/test/externaldata/dummy-provider/policy/template.yaml"},"https://github.com/open-policy-agent/gatekeeper/blob/master/test/externaldata/dummy-provider/policy/template.yaml")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"version-v1alpha1"},"Version v1alpha1"),(0,o.kt)("h4",{id:"providerrequest"},"ProviderRequest"),(0,o.kt)("p",null,"Request is the API request that is sent to the external data provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ProviderRequest is the API request for the external data provider.\ntype ProviderRequest struct {\n    // APIVersion is the API version of the external data provider.\n    APIVersion string `json:"apiVersion,omitempty"`\n    // Kind is kind of the external data provider API call. This can be "ProviderRequest" or "ProviderResponse".\n    Kind ProviderKind `json:"kind,omitempty"`\n    // Request contains the request for the external data provider.\n    Request Request `json:"request,omitempty"`\n}\n\n// Request is the struct that contains the keys to query.\ntype Request struct {\n    // Keys is the list of keys to send to the external data provider.\n    Keys []string `json:"keys,omitempty"`\n}\n')),(0,o.kt)("h4",{id:"providerresponse"},"ProviderResponse"),(0,o.kt)("p",null,"Response is the API response that a provider must return."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// ProviderResponse is the API response from a provider.\ntype ProviderResponse struct {\n    // APIVersion is the API version of the external data provider.\n    APIVersion string `json:"apiVersion,omitempty"`\n    // Kind is kind of the external data provider API call. This can be "ProviderRequest" or "ProviderResponse".\n    Kind ProviderKind `json:"kind,omitempty"`\n    // Response contains the response from the provider.\n    Response Response `json:"response,omitempty"`\n}\n\n// Response is the struct that holds the response from a provider.\ntype Response struct {\n    // Idempotent indicates that the responses from the provider are idempotent.\n    // Applies to mutation only and must be true for mutation.\n    Idempotent bool `json:"idempotent,omitempty"`\n    // Items contains the key, value and error from the provider.\n    Items []Item `json:"items,omitempty"`\n    // SystemError is the system error of the response.\n    SystemError string `json:"systemError,omitempty"`\n}\n\n// Items is the struct that contains the key, value or error from a provider response.\ntype Item struct {\n    // Key is the request from the provider.\n    Key string `json:"key,omitempty"`\n    // Value is the response from the provider.\n    Value interface{} `json:"value,omitempty"`\n    // Error is the error from the provider.\n    Error string `json:"error,omitempty"`\n}\n')))}c.isMDXComponent=!0}}]);