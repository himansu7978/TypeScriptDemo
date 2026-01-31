import {test,expect} from '@playwright/test'

//for parallel execution of tests within a describe block in test label
// test.describe.configure({ mode: 'parallel' })

//for serial execution of tests within a describe block in test label
// test.describe.configure({ mode: 'serial' })



test.describe('test suite for parallel execution',()=>{

    test('test case 1',async ({page})=>{
        console.log('test case 1 started');

    })

    test('test case 2',async ({page})=>{
        console.log('test case 2 started');
    })

})

test.describe('test suite for parallel execution 2',()=>{

    test('test case 3',async ({page})=>{
        console.log('test case 3 started');
    })
    test('test case 4',async ({page})=>{
        console.log('test case 4 started');
    })
})