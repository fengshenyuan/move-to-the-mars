def string2numeric_hash(text):
    """
    it's only a demo code, not real hash 
    ------------------------------------

    for real integer hash function with academic theory prove, look here:
    https://gist.github.com/badboy/6267743

    """

    import hashlib
    return int(hashlib.md5(text).hexdigest()[:8], 16)