/*
Write a function, searchParty, that accepts a name and a world object. The keys in the world objects describe a location. The values can be any combination of strings, arrays, or other objects.

Search through the whole world for the given name. Return an array with directions to the person if you find them. Return null if you can't find them.

let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};

searchParty('Francis', world); // => ['Fullstack', '25th floor']
searchParty('Franco', world); // => null
*/
function searchParty(name, obj) {
    let result = [];
    
    for(let key in obj) {
      let value = obj[key];
      
      if(value === name) {
        console.log("name", key, value)
        let toReturn = [];
        toReturn.push(key);
        return toReturn;
      }
      
      if(Array.isArray(value)) {
        if(value.includes(name)) {
          let returnToAdd =[];
          returnToAdd.push(key);
          return returnToAdd;
        }
      }
      
      if(typeof value === 'object' && !Array.isArray(value)) {
        
        let recursiveResult = searchParty(name, value);
        // if it is a object recurse on it, and if recursiveResult is not null, keep pushing every key on the result
        if(recursiveResult) {
          result.push(key);
          result = result.concat(recursiveResult);
          return result;
        }
      }
    }
    return result.length > 0 ? result: null;
  }
  
  
  
  describe('searchParty', () => {
    let simpleWorld = {
      'living room': 'Maureen',
      'kitchen': 'Brian',
      'bedroom': 'Julio'
    };
  
    let newYorkCity = {
      'Manhattan': {
        'Uptown': {
          'Washington Heights': 'Daniel',
          'UWS': 'Cathy'
        },
        'Midtown': {
          'Madison Square': 'Susan',
          'Theater District': ['Robert', 'Latisha']
        },
        'Downtown': {
          'Tribeca': 'Billy',
          'Financial District': {
            'Fullstack': {
              '11th floor': ['David', 'Nimit'],
              '25th floor': 'Ashi'
            }
          }
        }
      },
      'Brooklyn': {
        'Bushwick': 'Marilyn',
        'Bed-Stuy': ['Juan', 'Denice']
      },
      'Queens': {
        'Astoria': 'Ella',
        'Flushing': 'Eric'
      },
      'Bronx': {
        'Fordham': 'Aaron',
        'Melrose': 'Krysten'
      },
      'Staten Island': {
        'Arlington': ['Nadine', 'Mose'],
        'Elm Park': 'Arthur'
      }
    };
  
    it('is a function', () => {
      expect(typeof searchParty).toEqual('function');
    });
  
    it('returns a path to the person if they are found in a simple world', () => {
      let returnedValue = searchParty('Julio', simpleWorld);
      expect(returnedValue).toEqual(['bedroom']);
    });
  
    it('returns null if they are not found in a simple world', () => {
      let returnedValue = searchParty('Joel', simpleWorld);
      expect(returnedValue).toEqual(null);
    });
  
    it('returns a path to the person if they are found in a string in New York City', () => {
      let returnedValue = searchParty('Susan', newYorkCity);
      expect(returnedValue).toEqual(['Manhattan', 'Midtown', 'Madison Square']);
    });
  
    it('returns a path to the person if they are found in an array in New York City', () => {
      let returnedValue = searchParty('Nimit', newYorkCity);
      expect(returnedValue).toEqual(['Manhattan', 'Downtown', 'Financial District', 'Fullstack', '11th floor']);
    });
  
    it('returns null if they are not found in New York City', () => {
      let returnedValue = searchParty('John', newYorkCity);
      expect(returnedValue).toEqual(null);
    });
  
  });
  