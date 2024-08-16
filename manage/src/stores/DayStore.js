import { defineStore } from 'pinia'

export const useDayStore = defineStore('days', {
  state: () => ({
    days: JSON.parse(localStorage.getItem('allEvents')),
    stockage: JSON.parse(localStorage.getItem('allEvents')),
    day: '',
    success: false,
    curent: []
    // allUser: JSON.parse(localStorage.getItem('allUser'))
  }),
  getters: {},
  actions: {
    //get a user

    addEvent(data) {
      this.days.push(data)
      localStorage.setItem('allEvents', JSON.stringify(this.days))
      this.success = true
      localStorage.setItem(data.date, JSON.stringify(data))
      
    }
    // async toLogin(theUser) {
    //   // console.log(this.users)

    //   // localStorage.getItem('allUser', JSON.stringify(this.users))
    //   const l = this.allUser.length
    //   for (let pas = 0; pas < l; pas++) {
    //     // console.log(theUser.userPassWord)
    //     // console.log(this.allUser[pas]['userPassWord'])
    //     if (
    //       theUser.userMail == this.allUser[pas]['userMail'] &&
    //       bcrypt.compareSync(theUser.userPassWord, this.allUser[pas]['userPassWord'])
    //     ) {
    //       this.canConnect = true
    //       if (this.canConnect == true) {
    //         console.log(this.canConnect)
    //         localStorage.setItem('activeUser', JSON.stringify(this.allUser[pas]))
    //       }
    //     } else {
    //       this.canConnect = false
    //     }
    //   }
    // }
  }
})

// const dataLocal = JSON.parse(localStorage.getItem('Elisée'))
// console.log(dataLocal)
