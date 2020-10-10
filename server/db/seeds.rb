# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Client.destroy_all
Agent.destroy_all
Company.destroy_all
Appointment.destroy_all
Property.destroy_all

u1 = User.create(username: 'est123', password: 'es12345', firstname:'Esther', lastname:'Kim', email: 'esther@gmail.com', role: 'client', avatar: 'https://i.pinimg.com/564x/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.jpg', zipcode: 77024)
u2 = User.create(username: 'jam123', password: 'ja12345', firstname:'James', lastname:'Kim', email: 'james@gmail.com', role: 'client', avatar: 'https://i.pinimg.com/564x/4a/1f/76/4a1f76ca52bcb90ab2cb3343be8bb2ba.jpg', zipcode: 77024)
u3 = User.create(username: 'oli123', password: 'ol12345', firstname:'Olivia', lastname:'Lee', email: 'olivia@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/564x/1a/69/9a/1a699af5ba1c67fd07711a66bbe733eb.jpg', zipcode: 77036)
u4 = User.create(username: 'new123', password: 'ne12345', firstname:'Newton', lastname:'Williams', email: 'new@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/564x/cc/3d/12/cc3d1272697f1831a855e0d5caf6afbe.jpg', zipcode: 77094)
u5 = User.create(username: 'john123', password: 'jo12345', firstname:'John', lastname:'Smith', email: 'john@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/564x/9e/57/8b/9e578b47678afbfd98ea369302875f55.jpg', zipcode: 77494)
u6 = User.create(username: 'gra123', password: 'gr12345', firstname:'Grace', lastname:'Davis', email: 'grace@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/564x/c5/51/01/c551016922f299df4dc6f2b3b159c251.jpg', zipcode: 77079)
u7 = User.create(username: 'eve123', password: 'ev12345', firstname:'Evelyn', lastname:'Lopez', email: 'eve@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/564x/ee/d1/22/eed122f6177cabd54c6acf2cf8af37c6.jpg', zipcode: 77077)
u8 = User.create(username: 'mich123', password: 'mi12345', firstname:'Michael', lastname:'Miller', email: 'mich@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/564x/ba/07/79/ba07791074b2951ab88be5e851f3e469.jpg', zipcode: 77041)
u9 = User.create(username: 'zoe123', password: 'zo12345', firstname:'Zoey', lastname:'Duncan', email: 'zoey@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/474x/8a/3d/e5/8a3de524e4e0a965239442aaae0243df.jpg', zipcode: 77044)
u10 = User.create(username: 'ven123', password: 've12345', firstname:'Venus', lastname:'Mason', email: 'ven@gmail.com', role: 'Agent', avatar: 'https://i.pinimg.com/474x/25/7b/9c/257b9c5c883ac9b234d680544d812720.jpg', zipcode: 77081)

co1 = Company.create(logo: 'LOGO', name: 'Home1800', address: '25931 Brad Hurst Ct , Katy, TX 77494', zipcode: '77494', latitude: 29.723549, longitude: -95.797884, phone: '123-456-7899', email: 'home_1800@home.io', description: 'Our company is focus on Family-like agent, Proper service, Customer interests')

cl1 = Client.create(user: u1, company: co1)
cl2 = Client.create(user: u2, company: co1)

ag1 = Agent.create(user: u3, company: co1, experienceyears: 5, license: '12345')
ag2 = Agent.create(user: u4, company: co1, experienceyears: 15, license: '54687')
ag3 = Agent.create(user: u5, company: co1, experienceyears: 7, license: '12121')
ag4 = Agent.create(user: u6, company: co1, experienceyears: 7, license: '55555')
ag5 = Agent.create(user: u7, company: co1, experienceyears: 11, license: '13131')
ag6 = Agent.create(user: u8, company: co1, experienceyears: 20, license: '77777')
ag7 = Agent.create(user: u9, company: co1, experienceyears: 11, license: '13151')
ag8 = Agent.create(user: u10, company: co1, experienceyears: 2, license: '77667')

ap1 = Appointment.create(client: cl1, agent: ag1, date_time: "05/08/2020 14:30", message: 'Hi I want to make an appointment, please contact me')
ap2 = Appointment.create(client: cl1, agent: ag1, date_time: "05/08/2020 14:30", message: 'Thank you for contanct me, see you soon')
ap3 = Appointment.create(client: cl1, agent: ag2, date_time: "2020-08-10T12:30", message: 'Hi I want to make an appointment, please contact me')
ap4 = Appointment.create(client: cl2, agent: ag1, date_time: "2020-08-12T14:30" , message: 'Hi I want to make an appointment, please contact me')
ap5 = Appointment.create(client: cl2, agent: ag1, date_time: "2020-08-12T14:30", message: 'Thank you for contanct me, see you soon')
ap6 = Appointment.create(client: cl2, agent: ag2, date_time: "2020-08-07T07:30", message: 'Hi I want to make an appointment, please contact me')
ap7 = Appointment.create(client: cl2, agent: ag2, date_time: "2020-08-07T07:30", message: 'Thanks, I am looking for to meet you.')

p1 = Property.create(image: 'https://photos.harstatic.com/176898748/hr/img-2.jpeg?ts=2019-08-09T08:54:29.080', status: 'For Sale', category: 'Single-Family', schooldist: 'PARK LAKES Elementary School, HUMBLE Middle School, HUMBLE High School', address: '4518 SUNLIT PASS LOOP HUMBLE, TX 77396', zipcode: 77396, latitude: 29.942990, longitude: -95.254356, prices: '250,000', beds: 3, baths: 2, sqft: '2,740', built: 2012, agent: ag1)
p2 = Property.create(image: 'https://photos.harstatic.com/150098453/hr/img-10.jpeg?ts=2018-07-24T08:04:26.877', status: 'For Sale', category: 'Single-Family', schooldist: 'TERRACE Elementary School, SPRING OAKS Middle School, SPRING WOODS High School', address: '10608 SHADOW ELM COURT HOUSTON, TX 77043', zipcode: 77043, latitude: 29.823907, longitude: -95.557341,prices: '370,000', beds: 3, baths: 3, sqft: '2,090', built: 2015, agent: ag4)
p3 = Property.create(image: 'https://photos.harstatic.com/153724998/hr/img-5.jpeg?ts=2018-09-23T13:17:07.083', status: 'For Sale', category: 'Single-Family', schooldist: 'HAZEL S PATTISON Elementary School, GARLAND MCMEANS Junior High School, TAYLOR High School', address: '19910 IVORY MILLS LANE HOUSTON, TX 77094', zipcode: 77094, latitude:29.762339, longitude: -95.714458, prices: '250,000', beds: 3, baths: 2, sqft: '2,375', built: 1998, agent: ag1)
p4 = Property.create(image: 'https://photos.harstatic.com/152961921/hr/img-15.jpeg?ts=2018-09-05T12:24:41.210', status: 'Under Contract', category: 'Single-Family', schooldist: 'ODESSA KILPATRICK Elementary School, TAYS Junior High School, TOMPKINS High School', address: '25914 CELTIC TERRACE DRIVE KATY, TX 77494', zipcode: 77494, latitude:29.731197, longitude: -95.803879, prices: '350,000', beds: 4, baths: 2, sqft: '2,626', built: 2009, agent: ag1)
p5 = Property.create(image: 'https://photos.harstatic.com/185152579/hr/img-3.jpeg?ts=2020-05-08T00:28:43.600', status: 'For Sale', category: 'Single-Family', schooldist: 'MOORE Elementary School, HAMILTON Middle School, CYPRESS CREEK High School', address: '12103 Via Toscano Court, Cypress, TX 77429', zipcode: 77429, latitude:29.979338, longitude: -95.609470, prices: '325,000', beds: 4, baths: 3, sqft: '2,977', built: 2006, agent: ag1)
p6 = Property.create(image: 'https://photos.harstatic.com/185201425/hr/img-1.jpeg?ts=2020-05-08T16:54:25.627', status: 'For Sale', category: 'Townhouse', schooldist: 'HUNTERS CREEK Elementary School, SPRING BRANCH Middle School, MEMORIAL High School', address: '10158 Memorial Drive, Houston, TX 77024', zipcode: 77024, latitude:29.778009, longitude: -95.483834, prices: '598,000', beds: 3, baths: 3, sqft: '3,060', built: 1975, agent: ag6)
p7 = Property.create(image: 'https://photos.harstatic.com/185769486/hr/img-1.jpeg?ts=2020-07-16T10:21:08.440', status: 'For Sale', category: 'Townhouse', schooldist: 'HUNTERS CREEK Elementary School, SPRING BRANCH Middle School, MEMORIAL High School', address: '269 CHIMNEY ROCK ROAD HOUSTON, TX 77024', zipcode: 77024, latitude:29.774214, longitude:-95.479912, prices: '595,000', beds: 3, baths: 2, sqft: '2,267', built: 1968, agent: ag3)
p8 = Property.create(image: 'https://photos.harstatic.com/185530390/hr/img-3.jpeg?ts=2020-06-26T08:24:21.840', status: 'Under Contract', category: 'Single-Family', schooldist: 'HUNTERS CREEK Elementary School, SPRING BRANCH Middle School, MEMORIAL High School', address: '971 QUEEN ANNES ROAD HOUSTON, TX 77024', zipcode: 77024, latitude:29.781605, longitude:-95.487888, prices: '899,000', beds: 5, baths: 3, sqft: '3,926', built: 2012, agent: ag2)
p9 = Property.create(image: 'https://photos.zillowstatic.com/uncropped_scaled_within_1536_1152/IS725rrso5mch80000000000.webp', status: 'For Sale', category: 'Single-Family', schooldist: 'HUNTERS CREEK Elementary School, SPRING BRANCH Middle School, MEMORIAL High School', address: '9030 SANDRINGHAM DR HOUSTON, TX 77024', zipcode: 77024, latitude:29.778041, longitude:-95.465783, prices: '19,950,000', beds: 8, baths: 14, sqft: '21,738', built: 2008, agent: ag3)

