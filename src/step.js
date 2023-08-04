const steps =[
    {
        step: "1",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWL0poqbrVISF4RLdF6fbKQsKuAF0Iwj_ukw&usqp=CAU",
        heading:"Step:1 Complete Your Profile",
        para:"After Completion and approval, we will feature you among top tech startups and companies."
    },
    {
        step: "2",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb60uL5wczrZMjBm9v48oDeVpR8Khh1PkEwA&usqp=CAU",
        heading:"Step:2 Apply To Companies" ,
        para:"Start applying to companies and startups now and kickstart your career."

    },
    {
        step: "3",
        img:"data:image/png;base64,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",
        heading:"Step:3 Job Offers",
        para:"Interview requests pour in from companies. Select and engage with your preferred choices."
    },
    {
        step: "4",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrz1rQSs_TiDcZJ56ixw5iYTuD2cLAfkTeK4W_Criv-p3lD3HhWabrceTaZ5aUPZKiok&usqp=CAU",
        heading:"Step:4 Accept Dream Offer",
        para:"Evaluate offers, choose the finest, and get hired."
    }
]
export default steps;