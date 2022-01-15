import React from 'react';
import style from './style';
import SelectDropdown from "react-native-select-dropdown";

export default function DropDownList(props) {
    const dropDownList = props.dropDownList;
    const defaultValue = props.defaultValue;
    const funcOnSelect = props.funcOnSelect;

    return(
        <SelectDropdown
          data={dropDownList}
          onSelect={funcOnSelect}
          defaultValue={defaultValue}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={style.dropdown2BtnStyle}
          buttonTextStyle={style.dropdown2BtnTxtStyle}
          dropdownIconPosition={"right"}
          dropdownStyle={style.dropdown2DropdownStyle}
          rowStyle={style.dropdown2RowStyle}
          rowTextStyle={style.dropdown2RowTxtStyle}
        />
    );
}