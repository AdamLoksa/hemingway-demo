const getRumList = function() {
   return [
      {
         name: 'Dictador XO Insolent',
         price: '490',
      },
      {
         name: 'Plantation 20th. Anniversary',
         price: '2 990',
      },
      {
         name: 'Ron de Jeremy XXXO',
         price: '335',
      },
   ]
}

const getWhiskeyList = function() {
   return [
      {
         name: 'Ardbeg TEN',
         price: '245',
      },
      {
         name: 'Lagavulin 16y',
         price: '285',
      },
      {
         name: 'Hibiki Harmony',
         price: '490',
      },
   ]
}

const getAbsinthList = function() {
   return [
      {
         name: 'Oak Park Fountain',
         price: '315',
      },
      {
         name: 'Death in the Afternoon',
         price: '580',
      },
      {
         name: 'The Sun Also Rises',
         price: '390',
      },
   ]
}

const getGinList = function() {
   return [
      {
         name: 'Martini Al Formaggio',
         price: '325',
      },
      {
         name: 'Eton Mess',
         price: '275',
      },
      {
         name: 'Singapore Sling',
         price: '310',
      },
   ]
}

const getDrinkList = function(value) {
   switch (value) {
      case 'whiskey':
         return getWhiskeyList();
         break;
      case 'rum':
         return getRumList();
         break;
      case 'absinth':
         return getAbsinthList();
         break;
      case 'gin':
         return getGinList();
         break;
   }
}

export { getDrinkList };