let data = [
	{
		id: 1,
		name: 'Samsung',
		tipe: 'Galaxy S23 Ultra 5G',
		memory: '256 GB',
		price: 14000000,
	},
	{
		id: 2,
		name: 'Iphone',
		tipe: 'Iphone 15',
		memory: '128 GB',
		price: 13000000,
	},
	{
		id: 3,
		name: 'Oppo',
		tipe: 'Oppo Reno 12',
		memory: '256 GB',
		price: 6999000,
	},
	{
		id: 4,
		name: 'Vivo',
		tipe: 'Vivo V40 5G',
		memory: '128 GB',
		price: 5699000,
	},
];

// Menampilkan semua data sebagai JSON
console.log(JSON.stringify(data, null, 2));

// TODO 1 : Dapatkan semua data
console.log("Semua data dalam format tabel:");
console.table(data);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(tipehp => tipehp.name === name);
console.log("Data dengan nama Samsung:", getDataByName('Samsung'));

// TODO 3 : Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(tipehp => tipehp.price === price);
console.log("Data dengan harga 14.000.000:", getDataByPrice(14000000));

// TODO 4 : Dapatkan data dengan memory >= 256 GB
const getDataByMemory = (memory) => data.filter(tipehp => parseInt(tipehp.memory) >= memory);
console.log("Data dengan memory >= 256 GB:", getDataByMemory(256));
