
# <center>A little Experience about Python</center>
<center>Author G.Yuan 2018/07/05</center>

## `__getattr__ vs __getattribute__`
* `__getattribute__` will be called before you look up attribute in normal place, such as `__dict__`, super(), etc.
* `__getattr__ `will be called after you looked up in normal place.
* `__getattribute__`  AttribureError Exception will be ignored and continue to look up in normal place and `__getattr__` . A good sample:
```
class Sample(object):

    def __init__(self, a, b):
        self.a = a
        self.b = b
        self._x = None

    def __getattr__(self, item):
        return str(item)

    def __getattribute__(self, item):
        if item.startswith('_'):
            raise AttributeError
        return super().__getattribute__(item)


s = Sample('a', 'b')
print(s.a)
print(s.b)
print(s._x)
# result
# a
# b
# _x
```
    
## python super

 * super() is just a normal function. You can call super() anywhere if u can pass it the right parameters.(You can call it outside a class)
 *  call super().__init__ not means the interpreter will init all the parent classes right for u. It just says that I will find the next `parent` in the chain, then call __init__.(No promise about further parent). If u want init all parent class, u need design carefully and call super() in almost every level of inheri

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUyODI5NjA5LC03NzY4MzU0ODEsMTkwMz
UwMjYzOV19
-->