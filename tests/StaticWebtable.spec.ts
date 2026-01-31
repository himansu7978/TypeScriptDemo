//

import {test,expect, Locator} from '@playwright/test'

test('Static WebTable Handel', async ({page})=>{

     await   page.goto('https://testautomationpractice.blogspot.com/')

     const table:Locator= page.locator("table[name='BookTable'] tbody")
     await expect(table).toBeVisible()
    
     //Approch 1 Row Count 
    //  const rows:Locator=page.locator("table[name='BookTable'] tbody tr"); // returning all the rows  including with Header
     const rows:Locator=table.locator('tr');
     expect(rows).toHaveCount(7);

     //Approch 2
     const rowCount:number= await rows.count()
     console.log("Number Of Rows :",rowCount);
     expect(rowCount).toBe(7);

     // Number Of Columns Approch 1
    //  const columnHdr:Locator=page.locator("table[name='BookTable'] tbody tr th") // traditinal css one way
      const columnsHdr:Locator=rows.locator('th'); // Chaaning of locators 2nd way
      await expect(columnsHdr).toHaveCount(4)
    
      //Aproch 2
      const columnsHdrcount:number= await columnsHdr.count()
      expect(columnsHdrcount).toBe(4);
       console.log(" Number Of Columns Heder :",columnsHdrcount)

      // read All the Data Fro 2nd rows (index 2 means 1rd row including header )

      const secondrow:Locator=rows.nth(2).locator('td');
      
      const secondRowdata:string[]= await secondrow.allInnerTexts() 

      console.log("2ND Rows Data ", secondRowdata); // [ 'Learn Java', 'Mukesh', 'Java', '500' ]
      // await expect(secondRowdata).toContain("[ 'Learn Java', 'Mukesh', 'Java', '500' ]") // Asseration

      // printing Second Row data

      for(const ele of secondRowdata){

        console.log(ele)
      }

      //  Read All The Data From The Table 

      const allData:Locator[]= await rows.all();

      for(let row of allData.slice(1)){ // slice(1) -- remove the first row of the table 

        let allcolumns = await  row.locator('td').allInnerTexts();
        console.log(allcolumns.join('\t'));
      }

      // Print Book name Where Author is Mukesh 

        console.log("Book written by mukesh");
        let mukeshBook:string[]=[];
        for(let row1 of allData.slice(1)){ // slice(1) -- remove the first row of the table 

        let allcolumns = await  row1.locator('td').allInnerTexts();
        const author=allcolumns[1];
        const book=allcolumns[0]

        if (author==="Mukesh"){

          console.log(`${author} \t ${book}`);
          mukeshBook.push(book)
        }

      }
       expect(mukeshBook).toHaveLength(2) // Aseeration



       // Caluclate the Total Price of all Books

       let totalPrice:number=0;
       for(let row1 of allData.slice(1)){ // slice(1) -- remove the first row of the table 

        let allcolumns = await  row1.locator('td').allInnerTexts();
        
        const price=allcolumns[3]
        totalPrice=totalPrice+parseInt(price);

      }
      console.log("ToTal Price ",totalPrice)
      expect(totalPrice).toBe(7100) // Aseeration


})