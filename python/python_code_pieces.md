# Python

- Tornado run async code
    ```Python
        logging.getLogger().setLevel(logging.INFO)
        handler = MusicDurationUpdateHandler()
        io_loop = ioloop.IOLoop.current()
        io_loop.run_sync(handler.run)
    ```

- Magic: super class lazily loads child class instance, so child class can access each other
    ```Python
        class BaseBee(object):
            def __init__(self):
                self.__a_bee = None
                self.__d_bee = None

            @property
            def _a_bee(self):
                if not self.__a_bee:
                    self.__a_bee = ABee()
                return self.__a_bee

            @property
            def _d_bee(self):
                if not self.__d_bee:
                    self.__d_bee = DBee()
                return self.__d_bee


        class ABee(BaseBee):
            def get_a_info(self):
                return "hello this is ABee"

        class DBee(BaseBee):
            def get_d_info(self):
                return "here comes DBee"

            def access_to_a(self):
                return self._a_bee.get_a_info()
    ```

- Python Timer Task
    ```Python
        # run func post_sync_impl every 3 seconds
        try:
            while True:
                timer = Timer(3, post_sync_impl)
                timer.start()
                timer.join()

        except Exception as ex:
            logging.warning(traceback.format_exc())

        finally:
            end = True
    ```

- Python Object Property
    ```Python
        # Python动态面向对象：与C++/Java完全不一样的玩法
    class A():
        def __init__(self):
            print "init A"

        def print_a(self):
            self.print_b("this is from class A")

    class B(A):
        def __init__(self):
            # super(B, self).__init__()
            self.var = 'var in B'
            print "init B"

        def print_b(self, arg):
            print arg

    b = B()
    b.print_b("this is a test")
    b.print_a()
    """
       这句调用能成功，虽然A没有print_b()方法，但是传入的是self，恰恰self有print_b()方法，所以可以调用，这使得B继承了A，反而使得在A中可以使用B的代码了！实际上，Python的对象跟一般语言的对象不一样，C++是隐式传入this指针来实现的，但python只看你传入的self是什么，通过self能找到什么，而不是这个对象到底有没有这个。这很神奇，虽然直觉上违背了面向对象，但的确灵活强大，像万物之源，可以是面向对象，但同时也还是其他的东西。
    """

    # a.print_x("this is a test")
    ```

- Python String to num hash
    ```Python
        def string2numeric_hash(text):
            """
            it's only a demo code, not real hash
            ------------------------------------

            for real integer hash function with academic theory prove, look here:
            https://gist.github.com/badboy/6267743

            """

            import hashlib
            return int(hashlib.md5(text).hexdigest()[:8], 16)
    ```

- Python Dict User Reference
    ```Python
        dt = {}
        a = {"1": 1, "2": 2}

        dt['a'] = a

        print(a)
        print(dt)

        # {'1': 1, '2': 2}
        # {'a': {'1': 1, '2': 2}}

        a["3"] = 3
        print(a)
        print(dt)

        # when var a changes, var dt changes
        # {'1': 1, '3': 3, '2': 2}
        # {'a': {'1': 1, '3': 3, '2': 2}}

        l = [6, 7, 8]
        dt["l"] = l

        print(l)
        print(dt)

        # [6, 7, 8]
        # {'a': {'1': 1, '3': 3, '2': 2}, 'l': [6, 7, 8]}

        l.append(9)

        print(l)
        print(dt)

        # when l changes, dt changes
        # [6, 7, 8, 9]
        # {'a': {'1': 1, '3': 3, '2': 2}, 'l': [6, 7, 8, 9]}

    ```