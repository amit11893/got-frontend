import React from 'react';
import Downshift from 'downshift';

function AutoComplete({ data, label, onChange }) {
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
        clearSelection,
      }) => (
        <div>
          <label {...getLabelProps()}>{label}</label>
          <input
            {...getInputProps({
              onChange: (e) => {
                if (e.target.value === '') {
                  clearSelection();
                }
              },
            })}
          />
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
