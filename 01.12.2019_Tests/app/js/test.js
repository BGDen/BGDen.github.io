mocha.setup('bdd');
let assert = chai.assert;  
 
describe('_join', () => {
    it("[1,2,3] == 123", () => {    //проверка на работоспособность
        assert.equal(_join([1,2,3]), '123');
    });

    it(`[1,"sun",3,"led","comp"] == 1sun3ledcomp`, () => {    //проверка на строку
      assert.equal(_join([1,'sun',3,'led','comp']), '1sun3ledcomp');
    });

    it(`[1,"",3] == 13`, () => {    //проверка на дыры 
      assert.equal(_join([1,"",3]), '13');
    });
     
     it(`[1,undefined,3] == 13`, () => {    //проверка на undefined
      assert.equal(_join([1,undefined,3]), '13');
    });
     
     it(`[1,null,3] == 13`, () => {   //проверка на null
      assert.equal(_join([1,null,3]), '13');
    });
     
    it(`[1,true,false,3] == 1truefalse3`, () => {   //проверка на true/false
      assert.equal(_join([1,true,false,3]), '1truefalse3');
    });
    
    it(`[1,NaN,3] == 1NaN3`, () => {   //проверка на NaN 
      assert.equal(_join([1,NaN,3]), '1NaN3');
    });
    
    it(`[1,[],3] == 13`, () => {   //проверка если в исходном массиве есть сложный тип данных []
      assert.equal(_join([1,[],3]), '13');
    });
    
    it(`[1,[...a],3] == 1a3`, () => {   //проверка если в исходном массиве есть сложный тип данных ['a']
      assert.equal(_join([1,[...'a'],3]), '1a3');
    });
    
    it(`[1,http://google.com.ua,3] == 1http://google.com.ua3`, () => {   //проверка на URL
      assert.equal(_join([1,"http://google.com.ua",3]), '1http://google.com.ua3');
    });
});

describe('_indexOf', () => {
  
  it("[6,3,7,55,32,0], 7, 0 == 2", () => {   //проверка на работоспособность
    assert.equal(_indexOf([6,3,7,55,32,0], 7,0), '2');
  });
   
  it("[6,3,7,55,32,0], 8, 0 == -1", () => {   //проверка если не найдено искомое значение
    assert.equal(_indexOf([6,3,7,55,32,0], 8, 0), '-1');
  });
  
  it("[6,3,undefined,55,32,0], undefined, 0 == 2", () => {   //проверка на undefined
    assert.equal(_indexOf([6,3,undefined,55,32,0], undefined, 0), '2');
  });
  
  it("[6,3,null,55,32,0], null, 0 == 2", () => {   //проверка на null
    assert.equal(_indexOf([6,3,null,55,32,0], null, 0), '2');
  });
  
  it(`[6,3,"",55,32,0], "", 0 == 2`, () => {   //проверка на поиск дыры в массиве
    assert.equal(_indexOf([6,3,"",55,32,0], "", 0), '2');
  });
  
  it(`[6,3,true,55,32,0], true, 0 == 2`, () => {   //проверка на  true/false
    assert.equal(_indexOf([6,3,true,55,32,0], true, 0), '2');
  });
  
  it(`[6,3,"last",55,32,0], last, 0 == 2`, () => {   //проверка на строку
    assert.equal(_indexOf([6,3,"last",55,32,0], "last", 0), '2');
  });
  
  it(`[6,3,NaN,55,32,0], 55, 0 == 3`, () => {   //проверка на NaN
    assert.equal(_indexOf([6,3,NaN,55,32,0], 55, 0), '3');
  });
  
  it(`[6,3,NaN,55,32,0], 2, "a" == -1`, () => {   //начать поиск с индекса != num
    assert.equal(_indexOf([6,3,NaN,55,32,0], 2, "a"), '-1');
  });
  
  it(`[6,3,NaN,55,32,0], 32, -1 == -1`, () => {   //начать поиск с индекса = -1
    assert.equal(_indexOf([6,3,NaN,55,32,0], 32, -1), '-1');
  });

});
mocha.run();