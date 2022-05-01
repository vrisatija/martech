import React, { FC } from 'react';

interface IProps {
    data:{ 'text': string, 'id': number }[];
    input: string
}
const List: FC<IProps> = ({ data, input }) => {
  const filteredData = data.filter((enteredData) => {
    if (input === '') {
      return enteredData;
    }
    return enteredData.text.toLowerCase().startsWith(input);
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id} className="text-white">{item.text}</li>
      ))}
    </ul>
  );
};

export default List;
