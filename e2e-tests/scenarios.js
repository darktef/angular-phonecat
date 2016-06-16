'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

// error when tried to run first time, must install Java and also add the Java bin directory to environment variables

describe('PhoneCat Application', function() {

	describe('phoneList', function(){

		beforeEach(function(){
			browser.get('index.html');
		});

		it('should filter the phone list as a user types into the search box', function(){
			var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
			var query = element(by.model('$ctrl.query'));

			expect(phoneList.count()).toBe(3);

			query.sendKeys('nexus');
			expect(phoneList.count()).toBe(1);

			query.clear();
			query.sendKeys('motorola');
			expect(phoneList.count()).toBe(2);

			query.clear();
			query.sendKeys('apple');
			expect(phoneList.count()).toBe(0);
		});

		it('should be possible to control the order of phone list via the drop-down menu', function(){
			var queryField = element(by.model('$ctrl.query'));
			var orderSelect = element(by.model('$ctrl.orderProp'));
			var nameOption = orderSelect.element(by.css('option[value="name"]'));
			var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

			function getName(){
				return phoneNameColumn.map(function(elem){
					return elem.getText();
				});
			};

			queryField.sendKeys('tablet');

			expect(getName()).toEqual([
				'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
			]);

			nameOption.click();

			expect(getName()).toEqual([
				'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
			]);

		});

	});


});
