import React from 'react';
import Downshift from 'downshift';

function AutoComplete({ data, label, onChange }) {
  console.log(data);
  return (
    <Downshift onChange={onChange}>
      {({
        getLabelProps,
        getInputProps,
        getMenuProps,
        isOpen,
        getItemProps,
        highlightedIndex,
        inputValue,
        selectedItem,
      }) => (
        <div>
          <label {...getLabelProps()}>{label}</label>
          <input {...getInputProps()} />
          <ul className="suggestions" {...getMenuProps()}>
            {isOpen
              ? data
                  .filter(
                    (item) =>
                      !inputValue ||
                      item.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: { item },
                        index,
                        item,
                        onKeyDown: () => console.log(highlightedIndex),
                      })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      }}
                    >
                      {item}
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
}

export default AutoComplete;
