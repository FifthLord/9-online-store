import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
   constructor() {
      //_types - _brands тут це тимчасове рішення
      this._types = []
      this._brands = [
         { id: 1, name: 'Samsung' },
         { id: 2, name: 'Apple' },
         { id: 3, name: 'Lenovo' },
         { id: 4, name: 'Asus' },
      ]
      this._devices = [
         { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' },
         { id: 2, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' },
         { id: 3, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' },
         { id: 4, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' },
         { id: 5, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' },
         { id: 6, name: "Samsung", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' },
      ]
      this._selectedType = {}
      this._selectedBrand = {}
      makeAutoObservable(this)
   }

   setTypes(types) {
      this._types = types
   }

   setBrands(brands) {
      this._brands = brands
   }

   setDevices(devices) {
      this._devices = devices
   }

   setSelectedType(type) {
      this._selectedType = type
   }

   setSelectedBrand(brand) {
      this._selectedBrand = brand
   }

   get types() {
      return this._types
   }

   get brands() {
      return this._brands
   }

   get devices() {
      return this._devices
   }

   get selectedType() {
      return this._selectedType
   }

   get selectedBrand() {
      return this._selectedBrand
   }

}
