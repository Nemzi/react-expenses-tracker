import Button from "../UI/Button";

const DummyDatButton = (props) => {
  // setting up some dummy data
  const DUMMY_EXPENSE_TITLES = [
    "Refrigerator",
    "Book",
    "Washing Machine",
    "Keyboard",
    "Graphics Card",
    "Optic Cable",
    "Saxophone",
    "Cigarettes",
    "Tooth Paste",
    "Newest Manga Chapter",
  ];

  /* 
    Function to generate random date found on https://gist.github.com/miguelmota/5b67e03845d840c949c4
    
    randomDate takes two parameters, start and end, start date is hardcoded into the code, it also
    represents the earliest possible date you can filter by so hard coding this value didn't seem like
    a bad idea. randomDate gets the starting time adds a random math float to it and then multiplies that
    value with the subtraction result of the end parameter, which is set to always get the current time and 
    the starting time, thus generating a value in range of these two parameters. 
  */

  const randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };

  const title =
    DUMMY_EXPENSE_TITLES[
      // Pick a random title from the DUMMY_EXPENSE_TITLES array
      Math.floor(Math.random() * DUMMY_EXPENSE_TITLES.length)
    ];

  // Generate a random floored number in range from 1 to 500
  const amount = Math.floor(Math.random() * 500) + 1;

  // Process the random date data, convert it into a string then cut anything but the
  // part which contains the actual date in the yyyy-mm-dd format.
  const date = randomDate(new Date(2019, 0, 1), new Date())
    .toISOString()
    .slice(0, 10);

  // Pass data to parent component by listening to the onClick button event
  const generateDummyData = (event) => {
    props.onGenerateDummyData(title, amount, date);
  };

  return <Button onClick={generateDummyData}>Dummy Data</Button>;
};

export default DummyDatButton;

/*
    Possible better solution could be to return data in bulk, using objects, instead of sending
    three parameters.
*/
