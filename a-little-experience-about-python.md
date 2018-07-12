
# <center>A little Experience about Python</center>
<center>Author G.Yuan 2018/07/05</center>

## `__getattr__ vs __getattribute__`
* `__getattribute__ will called before you look up attribute in normal place, such as __dict__, super(), etc.
* __getattr__ will called after you looked up in normal place
* __getattribute__ AttribureError Exception will be ignored and continue to look up in normal place and __getattr__ . A good sample:
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


s = Sample(1,10)
print(s.a)
print(s.b)
print(s._x)
```
    

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk1NDIwNDQsLTc3NjgzNTQ4MSwxOTAzNT
AyNjM5XX0=
-->