// promises
// console.log("person1:shows ticket");
// console.log("person2:shows ticket");

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000);

// })
// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log("wife:i have the tickets")
//     console.log("husband:we should go in");
//     console.log("wife:no i am hungry");
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} popcorn`)
//     })

//     })
//     const getButter=getPopcorn.then((t)=>{
//         console.log("husband:i got some popcorn")
//         console.log("husband:we should go in");
//         console.log("wife:i need butter on my popcorn");
//         return new Promise((resolve,reject)=>{
//             resolve(`${t} butter`)
//         })

//         })

//         const getColdDrinks=getButter.then((t)=>{
//             return new Promise((resolve,reject)=>{
//                 resolve(`${t} coke`)
//             })

//             })

//     getColdDrinks.then((t)=>console.log(t))

// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

// async

// console.log("person1:shows ticket");
// console.log("person2:shows ticket");

// const premovie=async ()=>{

//     const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("ticket");
//         },3000);
//     })
//     const getPopcorn=new Promise((resolve,reject)=>{
//             resolve(`popcorn`)
//         })
//         const getButter= new Promise((resolve,reject)=>{
//             resolve(`butter`)
//         })
//         const getColdDrinks= new Promise((resolve,reject)=>{
//             resolve(`coke`)
//         })

//   let ticket= await promiseWifeBringingTicks;

//   console.log(`wife:i have the ${ticket}`)
//   console.log("husband:we should go in");
//   console.log("wife:no i am hungry");

//   let popcorn=await getPopcorn;
//   console.log(`husband:i got some ${popcorn}`)
//   console.log("husband:we should go in");
//   console.log("wife:i need butter on my popcorn");

//        let butter=await getButter;

//        console.log(`husband:i got some ${butter} on popcorn`);

//        let coldrink=await getColdDrinks;
//        console.log(`wife:i want ${coldrink}`);
//        console.log(`husband:anything else darling`);
//        console.log(`wife:lets go we are getting late`);
//        console.log(`husband:thank you for the reminder *grins*`)

//   return ticket;
// }
// premovie().then((m)=>console.log(`person3:shows ${m}`))
// console.log("person4:shows ticket");
// console.log("person5:shows ticket");

//Promise.all

// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// const preMovie = async () => {

//   const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ticket'), 3000);
//   });
//   const getPopcorn =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('popcorn'), 3000);
//   });

//   const getCandy =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('candy'), 3000);
//   });

//    const getCoke =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('coke'), 3000);
//   });

//   const getIcecream =  new Promise((resolve, reject) => {
//     setTimeout(() => resolve('chocolate'), 3000);
// });

//   let ticket = await person3PromiseToShowTicketWhenWifeArrives;

//     let [ popcorn, candy, coke ,chocolate ] =
//     await Promise.all([ getPopcorn, getCandy, getCoke ,getIcecream]);

//     console.log(`got ${popcorn}, ${candy}, ${coke},${chocolate}`);

//   return ticket;

// };

// preMovie().then((t) => console.log(`person4 shows ${t}`));

// console.log('person4 shows ticket');

//create post using async

// const posts = [
//     { title: "post1", body: "this is post one"},
//     { title: "post2", body: "this is post two"},
//   ];

//   function getPost() {
//       let output = "";
//       setTimeout(() => {
//         for (let elem of posts) {
//           output += `${elem.title}`;
//         }

//       }, 1000);
//   }
//   async function createPost(post) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(posts.push(post));
//            reject();
//         },1000)
//     })
// }
// async function deletePost() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(posts.length>0){
//                 resolve(posts.pop());
//             }else{
//                 reject(console.log("already empty"));
//             }
//         },1000)
//     })
// }

// createPost({ title: "post3", body: "this is post three" }).then(getPost)
//       .then(deletePost).catch((err)=>err)
//       .then(getPost)
//       .then(deletePost).catch((err)=>err)
//       .then(getPost)
//       .then(deletePost).catch((err)=>err)
//       .then(getPost)
//       .then(deletePost).catch((err)=>err)
//       .then(createPost({ title: "post4", body: "this is post four" }))
//       .then(getPost)
//       .then(deletePost).catch((err)=>err)

const Post = async () => {
    const crPost = new Promise((resolve, reject) => {
      setTimeout(() => resolve("posts are created"), 3000);
    });
    const getpost = new Promise((resolve, reject) => resolve(`created`));
    const dltpost = new Promise((resolve, reject) => resolve(`deleted`));
    let posts = await crPost;
    console.log(`${posts}`);
    let getpst = await getpost;
    console.log(`post1 is ${getpst}`);
    console.log(`post2 is ${getpst}`);
    let deletePost = await dltpost;
    console.log(`post1 is ${deletePost}`);
    console.log(`post2 is ${deletePost}`);
    return posts;
  };
  Post().then((m) => console.log(m));
  