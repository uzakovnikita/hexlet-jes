import reverse from '../src';

test('reverse', () => {
	expect(reverse('hello')).toEqual('olleh');
	expect(reverse('')).toEqual('');
});
