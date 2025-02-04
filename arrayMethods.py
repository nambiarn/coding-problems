def condition(el=None):
    return el % 2 == 0


def someCallback(el=None):
    return el is not None and condition(el)


def some(elements, callback):
    for element in elements:
        if callback(element):
            return True

    return False


print(some([3, 8, 13], someCallback))


'''
Python Learnings:
- Dictionary key signify the type of the value. For example if the key is wrapped in quotes, it means that the value is a string.
- Accessing a tuple value is similar to accessing an index in a list. Just use the index
- Accessing a dictionary value can be done using square brackets or using the get function on the dictionary class
- You can drop callback functions like in js
- You can drop conditions as a parameter to a function
- Similar to JS you can short circuit to avoid writing bunch of code
- It's important that variables are defined before it's being called
- Going through a list is fairly straightforward - just use the in keyword
'''
