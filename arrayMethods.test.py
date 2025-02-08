import unittest
from arrayMethods import some


class ArrayMethods(unittest.TestCase):

    def test_some(self):
        def someCallback(el=None):
            return el is not None and el % 2 == 0

        self.assertTrue(some([3, 8, 13], someCallback))
        self.assertFalse(some([1, 3, 13], someCallback))
        self.assertFalse(some([], someCallback))
        self.assertFalse(some(None, someCallback))
        self.assertFalse(some('', someCallback))
        self.assertFalse(some({}, someCallback))
        self.assertFalse(some((), someCallback))

        def someCallback(el=None):
            return el is None and el.lower() == 'meow'
        
        



if __name__ == "__main__":
    unittest.main()
