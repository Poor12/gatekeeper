"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3029],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1338:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return d},toc:function(){return c},default:function(){return m}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"audit",title:"Audit"},l=void 0,u={unversionedId:"audit",id:"version-v3.6.x/audit",title:"Audit",description:"Audit performs periodic evaluations of existing resources against constraints, detecting pre-existing misconfigurations.",source:"@site/versioned_docs/version-v3.6.x/audit.md",sourceDirName:".",slug:"/audit",permalink:"/gatekeeper/website/docs/v3.6.x/audit",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.6.x/audit.md",tags:[],version:"v3.6.x",frontMatter:{id:"audit",title:"Audit"},sidebar:"version-v3.6.x/docs",previous:{title:"How to use Gatekeeper",permalink:"/gatekeeper/website/docs/v3.6.x/howto"},next:{title:"Handling Constraint Violations",permalink:"/gatekeeper/website/docs/v3.6.x/violations"}},d={},c=[{value:"Reading Audit Results",id:"reading-audit-results",level:2},{value:"Prometheus Metrics",id:"prometheus-metrics",level:3},{value:"Constraint Status",id:"constraint-status",level:3},{value:"Audit Logs",id:"audit-logs",level:3},{value:"Violations",id:"violations",level:4},{value:"Other Event Types",id:"other-event-types",level:4},{value:"Configuring Audit",id:"configuring-audit",level:2},{value:"Audit using kinds specified in the constraints only",id:"audit-using-kinds-specified-in-the-constraints-only",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Audit performs periodic evaluations of existing resources against constraints, detecting pre-existing misconfigurations."),(0,r.kt)("h2",{id:"reading-audit-results"},"Reading Audit Results"),(0,r.kt)("p",null,"There are three ways to gather audit results, depending on the level of detail needed."),(0,r.kt)("h3",{id:"prometheus-metrics"},"Prometheus Metrics"),(0,r.kt)("p",null,"Prometheus metrics provide an aggregated look at the number of audit violations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gatekeeper_audit_last_run_time")," provides the timestamp of the most recently completed audit run"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gatekeeper_violations")," provides the total number of audited violations for the last audit run, broken down by violation severity")),(0,r.kt)("h3",{id:"constraint-status"},"Constraint Status"),(0,r.kt)("p",null,"Violations of constraints are listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," field of the corresponding constraint.\nNote that only violations from the most recent audit run are reported. Also note that there\nis a maximum number of individual violations that will be reported on the constraint\nitself. If the number of current violations is greater than this cap, the excess violations\nwill not be reported (though they will still be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"totalViolations")," count).\nThis is because Kubernetes has a cap on how large individual API objects can grow, which makes\nunbounded growth a bad idea. This limit can be configured via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--constraint-violations-limit")," flag."),(0,r.kt)("p",null,"Here is an example of a constraint with violations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    labels: ["gatekeeper"]\nstatus:\n  auditTimestamp: "2019-05-11T01:46:13Z"\n  enforced: true\n  violations:\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: default\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: gatekeeper-system\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: kube-public\n  - enforcementAction: deny\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: kube-system\n')),(0,r.kt)("h3",{id:"audit-logs"},"Audit Logs"),(0,r.kt)("h4",{id:"violations"},"Violations"),(0,r.kt)("p",null,"The audit pod emits JSON-formatted audit logs to stdout. The following is an example audit event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "level": "info",\n  "ts": 1632889070.3075402,\n  "logger": "controller",\n  "msg": "container <kube-scheduler> has no resource limits",\n  "process": "audit",\n  "audit_id": "2021-09-29T04:17:47Z",\n  "event_type": "violation_audited",\n  "constraint_group": "constraints.gatekeeper.sh",\n  "constraint_api_version": "v1beta1",\n  "constraint_kind": "K8sContainerLimits",\n  "constraint_name": "container-must-have-limits",\n  "constraint_namespace": "",\n  "constraint_action": "deny",\n  "resource_group": "",\n  "resource_api_version": "v1",\n  "resource_kind": "Pod",\n  "resource_namespace": "kube-system",\n  "resource_name": "kube-scheduler-kind-control-plane"\n}\n')),(0,r.kt)("p",null,"In addition to information on the violated constraint, violating resource, and violation message, the\naudit log entries also contain:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"audit_id")," field that uniquely identifies a given audit run. This allows indexing of historical audits"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"event_type")," field with a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"violation_audited")," to make it easy to programatically identify audit violations")),(0,r.kt)("h4",{id:"other-event-types"},"Other Event Types"),(0,r.kt)("p",null,"In addition to violations, these other audit events may be useful (all uniquely identified via the ",(0,r.kt)("inlineCode",{parentName:"p"},"event_type")," field):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"audit_started")," marks the beginning of a new audit run"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"constraint_audited")," marks when a constraint is done being audited for a given run, along with the number of violations found"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"audit_finished")," marks the end of the current audit run")),(0,r.kt)("p",null,"All of these events (including ",(0,r.kt)("inlineCode",{parentName:"p"},"violation_audited"),") are marked with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"audit_id")," for a given audit run."),(0,r.kt)("h2",{id:"configuring-audit"},"Configuring Audit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Audit violations per constraint: set ",(0,r.kt)("inlineCode",{parentName:"li"},"--constraint-violations-limit=123")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"20"),")"),(0,r.kt)("li",{parentName:"ul"},"Audit chunk size: set ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-chunk-size=500")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," = infinite) to limit memory consumption of the auditing ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod")),(0,r.kt)("li",{parentName:"ul"},"Audit interval: set ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-interval=123")," (defaults to every ",(0,r.kt)("inlineCode",{parentName:"li"},"60")," seconds). Disable audit interval by setting ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-interval=0"))),(0,r.kt)("p",null,"By default, audit will request each resource from the Kubernetes API during each audit cycle. To rely on the OPA cache instead, use the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-from-cache=true"),". Note that this requires replication of Kubernetes resources into OPA before they can be evaluated against the enforced policies. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.6.x/sync"},"Replicating data")," section for more information."),(0,r.kt)("h3",{id:"audit-using-kinds-specified-in-the-constraints-only"},"Audit using kinds specified in the constraints only"),(0,r.kt)("p",null,"By default, Gatekeeper will audit all resources in the cluster. This operation can take some time depending on the number of resources."),(0,r.kt)("p",null,'If all of your constraints match against specific kinds (e.g. "match only pods"), then you can speed up audit runs by setting ',(0,r.kt)("inlineCode",{parentName:"p"},"--audit-match-kind-only=true")," flag. This will only check resources of the kinds specified in all ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.6.x/howto#constraints"},"constraints")," defined in the cluster."),(0,r.kt)("p",null,"For example, defining this constraint will only audit ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod")," kind:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n...\n')),(0,r.kt)("p",null,"If any of the ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.6.x/howto#constraints"},"constraints")," do not specify ",(0,r.kt)("inlineCode",{parentName:"p"},"kinds"),", it will be equivalent to not setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--audit-match-kind-only")," flag (",(0,r.kt)("inlineCode",{parentName:"p"},"false")," by default), and will fall back to auditing all resources in the cluster."))}m.isMDXComponent=!0}}]);