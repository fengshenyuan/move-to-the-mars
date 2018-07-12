
# <center>A little Experience about Python</center>
<center>Author G.Yuan 2018/07/05</center>

## `__getattr__ vs __getattribute__`
* __getattribute__ will called before you look up attribute in normal place, such as __dict__, super(), etc.
* __getattr__ will called after you looked up in normal place
* A good sample:

    enter code here

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc3NjgzNTQ4MSwxOTAzNTAyNjM5XX0=
-->