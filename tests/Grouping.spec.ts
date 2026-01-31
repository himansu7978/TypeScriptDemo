
import {test,expect} from '@playwright/test'

test.describe('Group1', async ()=>{

    test('1Test',async ()=>{

        console.log('Test1 Started ');
    
    })

    test('Test2',async ()=>{

        console.log('test 2 start')
    })

})

test.describe('Group2',async ()=>{

     test('Test3',async ()=>{

        console.log('Test3 Started ');
    
    })

    test('Test4',async ()=>{

        console.log('test4 start')
    })

})

test.describe('Group3',async ()=>{
    test('Test5',async ()=>{

        console.log('Test 5')
    })
    test('Test6',async ()=>{

        console.log('Test6')
    })

})

test.describe('Group4',async ()=>{

    test('Test 7',async ()=>{

        console.log('Group 4 Test 7')
    })
})