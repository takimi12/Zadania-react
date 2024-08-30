const user = [
    {name: 'Anna'},
    {name:'Marcin'},
    {name:'Tomasz'},
    ]
  
    // plytka kopia
    // kopia tylko referencji

  const users2 = [...user, {name: 'Andrzej'}]
  
    /// kopiowanie glębokie
    const users3 = [...user.map(el => ({ ...el })), {name: 'Andrzej'}];

    
  users2[1].name = 'Marian';
  
  console.log(user, users2,users3)