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

def every(elements=[], callback=None):
    count = 0
    for element in elements:
        if callback(element):
            count = count + 1
    
    return count == len(elements)

print(every([2, 8, 12], someCallback))

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

2/4
- Incrementing a variable means performing a proper equation
- Get better at getting to solutions - comparing counts should have come naturally
- You measure the len of a list is using the len() function
- You can initialize a variable at the top like you do in the regular
'''
