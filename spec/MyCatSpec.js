describe("MyCat", function() {
  // var player;
  beforeEach(function() {
    // player = new Player();
	console.log('do each.')
  });

  it("is a function.", function() {
    expect('function').toEqual(typeof MyCat);
	    //demonstrates use of custom matcher
	    //expect(player).toBePlaying(song);
  });	

  describe("when MyCat is defined.", function() {
    beforeEach(function() {
	});

    it("should return 'Hello' when pass single parameter 'Hello'" , function() {
	  expect('Hello').toEqual(MyCat('Hello'))
    });

    it("should return 'Hello' when pass 'Hello' and 'null'", function() {
	  expect('Hello').toEqual(MyCat('Hello', null))		
    });

    it("should return 'Hello' when pass 'Hello' and 'undefined'", function() {
	  expect('Hello').toEqual(MyCat('Hello', undefined))		
    });

    it("should return 'undefined' when call MyCat()", function() {
	  expect(undefined).toEqual(MyCat())		
    });

    it("should return 'Hello' when call MyCat(undefined, 'Hello')", function() {
	  expect('Hello').toEqual(MyCat(undefined, 'Hello'));	
    });

    it("should return 'Hello, NAzT!' when call MyCat('Hello', ', NAzT!')", function() {
	  expect('Hello, NAzT!').toEqual(MyCat('Hello', ', NAzT'));
    })

  });
});

