describe("phoneList", function(){

	beforeEach(module('phoneList'));

	describe('PhoneListCtrl',function(){

		var ctrl;

		beforeEach(inject(function($componentController){
			ctrl = $componentController('phoneList');
		}));

		it("should create 'phones' model with 3 phones", function(){
			expect(ctrl.phones.length).toBe(3);
		});

		it("should set a default value for orderProp", function(){
			expect(ctrl.orderProp).toBe('age');
		});
		
	});

});