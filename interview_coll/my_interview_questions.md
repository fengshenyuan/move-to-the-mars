# Computer System

# Language&Compiler

# Network

# Python
- 函数执行时间的装饰器
    ```
    def runtime_cost(func):

        @functools.wraps(method)
        def wrapper(*args, **kwargs):
            start_time = time.time()

            try:
                result = func(*args, **kwargs)
            except Exception as Ex:
                result = None

                logging.info(traceback.format_exc())

            end_time = time.time()

            logging.info(func.__module__ + "." + func.__name__ + " call takes " + str(end_time - start_time) + " seconds")

            return result

        return wrapper
    ```

- map函数的实现
    ```
    def map_impl(func, iterable):
        result = []
        try:
            for x in iterable:
                if func(x):
                    result.append(x)

        except Exception as ex:
            logging.info(traceback.format_exc())

        return result

    ```

# DataBase

# Redis

# NewStack

# LinuxCmds