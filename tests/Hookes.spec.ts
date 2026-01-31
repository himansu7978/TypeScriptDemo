// BeforeEach - it will Execute before every test ,
// AfterEach - It will Execute after  Every test

// BeforeAll - It will Execute once Before running  the test 
// AfterAll - It will Execute Once After running the test


import {test,expect} from '@playwright/test'


test.beforeAll("before All", async ()=>{

  console.log("It will execute before all the activity and it will excute only once ")

})

test.beforeEach("Befor each",async ()=>{

     console.log("It will execute before each of one test")
})


 test('Test5',async ()=>{

        console.log('Test 5')
    })

 test('Test6',async ()=>{

        console.log('Test6')
    })

test.afterEach('After Each ', async ()=>{

  console.log("It will execute after each of  the test ")
})


test.afterAll('After all ', async ()=>{

  console.log("It will Execute After all The Activity And It will execute only once ")

})

