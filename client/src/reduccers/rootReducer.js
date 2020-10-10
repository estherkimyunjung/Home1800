const initialState = {
  company: {
    id: 1,
    logo: "LOGO",
    name: "Home1800",
    address: "25931 Brad Hurst Ct , Katy, TX 77494",
    zipcode: 77494,
    latitude: 29.723549,
    longitude: -95.797884,
    phone: "123-456-7899",
    email: "home_1800@home.io",
    descriptionOne: "Our company is focus on Family-like agent",
    descriptionTwo: "Proper service",
    descriptionThree: "Customer interests"
   }
}

export default function reducer(state = initialState, action){
  console.log("State", state)
  console.log("Action", action)
  return state
}

