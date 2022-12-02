import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
   constructor() {
      //_types - _brands тут це тимчасове рішення
      this._types = [
         { id: 1, name: 'Fridges' },
         { id: 2, name: 'Phones' }
      ]
      this._brands = [
         { id: 1, name: 'Samsung' },
         { id: 2, name: 'Apple' }
      ]
      this._devices = [
         { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: '../../../server/static/776bc134-e4d5-43f2-8909-6648bbade95a.jpg' }
      ]
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

   get types() {
      return this._types
   }

   get brands() {
      return this._brands
   }

   get devices() {
      return this._devices
   }

}
