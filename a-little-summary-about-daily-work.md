
# <center>A little Summary about Daily Work</center>
<center>Author G.Yuan 2018/07/05</center>

## Software Engineering
* Before you deploy your branch into feature env, please wait the CI passed. 
	 > Why: Deploy just pull image from docker hub, but the image will only update after your branch passed CI.
* You could find the details about the new image builded by CI with your branch, including the libraries version you changed in requirement.txt
* Comment only when it must. Code speaks themselves.

## What can be learned from NewRelic Gevent Tracing Issue?
> **Backgroud**
> 2018/08/21 We use NewRelic Python Agent v2.62.0.47 to trace Mircroserive-remote-call time cost with FunctionTrace context manager in gevent spawn coroutines. But the agent lose the transaction in gevent and when we keep the current transaction and application object in flask request to provide a access in gevent. The agent actually throws exceptions and WE NEVER TRY TO CATCH IT, **then online crashed**:
> 
> Runtime instrumentation error. Object on transaction node stack when removing last value is not the expected one, found <FunctionTrace {'terminal': False, 'group': 'Function', 'name': 'business_api.process_request.send_request.AA_AJAX_API.connect_product_account_ajax_0', 'params': None, 'rollup': None, 'label': None}>, expected <FunctionTrace {'terminal': False, 'group': 'Function', 'name': 'business_api.process_request.send_request.MICRO_SERVICE_API.dna_query_unified_product_0', 'params': None, 'rollup': None, 'label': None}>. Report this issue to New Relic support.
  File "/services/appannie/envs/aa-api-business/local/lib/python2.7/site-packages/gevent/greenlet.py", line 536, in run
    result = self._run(*self.args, **self.kwargs)
  File "/services/appannie/envs/aa-api-business/local/lib/python2.7/site-packages/flask/ctx.py", line 110, in wrapper
    return f(*args, **kwargs)
  File "/services/appannie/aa-api-business/gaf/component/request/runner/base_runner.py", line 56, in _do_run
    except (Timeout, ConnectionError) as e:
  File "/services/appannie/envs/aa-api-business/local/lib/python2.7/site-packages/newrelic-2.62.0.47/newrelic/api/time_trace.py", line 103, in __exit__
    parent = transaction._pop_current(self)


* If some problems happend with a 3rd party library or framework, try to find info and solutions on their official channel. 
* IMPORT: If a new version or update availiable, try it first.
* If official cannot solve the problems, try others.
* Before we make sure ourself solution is OK. Add most general expection try-catch with the untest code to protect the production env from unexpected crash.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE1ODQ3MTQ2OCwxODU2NDg4MDYzLC00MT
U5NTE0NTVdfQ==
-->