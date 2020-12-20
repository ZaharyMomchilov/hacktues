import { useState, useRef, useEffect, createElement } from 'react';
import { useMultipleSelection, useCombobox } from 'downshift';
import matchSorter from 'match-sorter';
import Highlighter from 'react-highlight-words';
import useDeepCompareEffect from 'react-use/lib/useDeepCompareEffect';
import { FormLabel } from '@chakra-ui/form-control';
import { Stack, Box, List, ListItem, Text,  } from '@chakra-ui/layout';
import {CheckIcon} from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/tag';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function defaultOptionFilterFunc(items, inputValue) {
  return matchSorter(items, inputValue, {
    keys: ['value', 'label']
  });
}

var CUIAutoComplete = function CUIAutoComplete(props) {
  var items = props.items,
      _props$optionFilterFu = props.optionFilterFunc,
      optionFilterFunc = _props$optionFilterFu === void 0 ? defaultOptionFilterFunc : _props$optionFilterFu,
      itemRenderer = props.itemRenderer,
      _props$highlightItemB = props.highlightItemBg,
      highlightItemBg = _props$highlightItemB === void 0 ? 'gray.100' : _props$highlightItemB,
      placeholder = props.placeholder,
      label = props.label,
      listStyleProps = props.listStyleProps,
      inputStyleProps = props.inputStyleProps,
      toggleButtonStyleProps = props.toggleButtonStyleProps,
      tagStyleProps = props.tagStyleProps,
      selectedIconProps = props.selectedIconProps,
      listItemStyleProps = props.listItemStyleProps,
      onCreateItem = props.onCreateItem,
      downshiftProps = _objectWithoutPropertiesLoose(props, ["items", "optionFilterFunc", "itemRenderer", "highlightItemBg", "placeholder", "label", "listStyleProps", "labelStyleProps", "inputStyleProps", "toggleButtonStyleProps", "tagStyleProps", "selectedIconProps", "listItemStyleProps", "onCreateItem"]);
  /* States */


  var _React$useState = useState(false),
      isCreating = _React$useState[0],
      setIsCreating = _React$useState[1];

  var _React$useState2 = useState(''),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = useState(items),
      inputItems = _React$useState3[0],
      setInputItems = _React$useState3[1];
  /* Refs */


  var disclosureRef = useRef(null);
  /* Downshift Props */

  var _useMultipleSelection = useMultipleSelection(downshiftProps),
      getSelectedItemProps = _useMultipleSelection.getSelectedItemProps,
      getDropdownProps = _useMultipleSelection.getDropdownProps,
      addSelectedItem = _useMultipleSelection.addSelectedItem,
      removeSelectedItem = _useMultipleSelection.removeSelectedItem,
      selectedItems = _useMultipleSelection.selectedItems;

  var selectedItemValues = selectedItems.map(function (item) {
    return item.value;
  });

  var _useCombobox = useCombobox({
    inputValue: inputValue,
    selectedItem: undefined,
    items: inputItems,
    onInputValueChange: function onInputValueChange(_ref) {
      var inputValue = _ref.inputValue,
          selectedItem = _ref.selectedItem;
      var filteredItems = optionFilterFunc(items, inputValue || '');

      if (isCreating && filteredItems.length > 0) {
        setIsCreating(false);
      }

      if (!selectedItem) {
        setInputItems(filteredItems);
      }
    },
    stateReducer: function stateReducer(state, actionAndChanges) {
      var changes = actionAndChanges.changes,
          type = actionAndChanges.type;

      switch (type) {
        case useCombobox.stateChangeTypes.InputBlur:
          return _extends({}, changes, {
            isOpen: false
          });

        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return _extends({}, changes, {
            highlightedIndex: state.highlightedIndex,
            inputValue: inputValue,
            isOpen: true
          });

        case useCombobox.stateChangeTypes.FunctionSelectItem:
          return _extends({}, changes, {
            inputValue: inputValue
          });

        default:
          return changes;
      }
    },
    // @ts-ignore
    onStateChange: function onStateChange(_ref2) {
      var inputValue = _ref2.inputValue,
          type = _ref2.type,
          selectedItem = _ref2.selectedItem;

      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue || '');
          break;

        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (selectedItem) {
            if (selectedItemValues.includes(selectedItem.value)) {
              removeSelectedItem(selectedItem);
            } else {
              if (onCreateItem && isCreating) {
                onCreateItem(selectedItem);
                setIsCreating(false);
                setInputItems(items);
                setInputValue('');
              } else {
                addSelectedItem(selectedItem);
              }
            } // @ts-ignore


            selectItem(null);
          }

          break;
      }
    }
  }),
      isOpen = _useCombobox.isOpen,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      getLabelProps = _useCombobox.getLabelProps,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      highlightedIndex = _useCombobox.highlightedIndex,
      getItemProps = _useCombobox.getItemProps,
      openMenu = _useCombobox.openMenu,
      selectItem = _useCombobox.selectItem,
      setHighlightedIndex = _useCombobox.setHighlightedIndex;

  useEffect(function () {
    if (inputItems.length === 0) {
      setIsCreating(true); // @ts-ignore

      setInputItems([{
        label: "" + inputValue,
        value: inputValue
      }]);
      setHighlightedIndex(0);
    }
  }, [inputItems, setIsCreating, setHighlightedIndex, inputValue]);
  useDeepCompareEffect(function () {
    setInputItems(items);
  }, [items]);
  /* Default Items Renderer */

  function defaultItemRenderer(selected) {
    return selected.label;
  }

  return createElement(Stack, null, createElement(FormLabel, Object.assign({}, getLabelProps({})), label), selectedItems && createElement(Stack, {
    spacing: 2,
    isInline: true,
    flexWrap: 'wrap'
  }, selectedItems.map(function (selectedItem, index) {
    return createElement(Tag, Object.assign({
      mb: 1
    }, tagStyleProps, {
      key: "selected-item-" + index
    }, getSelectedItemProps({
      selectedItem: selectedItem,
      index: index
    })), createElement(TagLabel, null, selectedItem.label), createElement(TagCloseButton, {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeSelectedItem(selectedItem);
      },
      "aria-label": 'Remove menu selection badge'
    }));
  })), createElement(Stack, Object.assign({
    isInline: true
  }, getComboboxProps()), createElement(Input, Object.assign({}, inputStyleProps, getInputProps(getDropdownProps({
    placeholder: placeholder,
    onClick: isOpen ? function () {} : openMenu,
    onFocus: isOpen ? function () {} : openMenu,
    ref: disclosureRef
  })))), createElement(Button, Object.assign({}, toggleButtonStyleProps, getToggleButtonProps(), {
    "aria-label": 'toggle menu'
  }), ' ', "\u2193", ' ')), createElement(Box, {
    pb: 4,
    mb: 4
  }, createElement(List, Object.assign({
    bg: 'white',
    borderRadius: '4px',
    border: isOpen && '1px solid rgba(0,0,0,0.1)',
    boxShadow: '6px 5px 8px rgba(0,50,30,0.02)'
  }, listStyleProps, getMenuProps()), isOpen && inputItems.map(function (item, index) {
    return createElement(ListItem, Object.assign({
      px: 2,
      py: 1,
      borderBottom: '1px solid rgba(0,0,0,0.01)'
    }, listItemStyleProps, {
      bg: highlightedIndex === index ? highlightItemBg : 'inherit',
      key: "" + item.value + index
    }, getItemProps({
      item: item,
      index: index
    })), isCreating ? createElement(Text, null, createElement(Box, {
      as: 'span'
    }, "Create"), ' ', createElement(Box, {
      as: 'span',
      bg: 'yellow.300',
      fontWeight: 'bold'
    }, "\"", item.label, "\"")) : createElement(Box, {
      display: 'inline-flex',
      alignItems: 'center'
    }, selectedItemValues.includes(item.value) && createElement(CheckIcon, Object.assign({
      icon: 'check-circle',
      marginRight: "5px", 
      color: 'green.500',
      role: 'img',
      display: 'inline',
      "aria-label": 'Selected'
    }, selectedIconProps)), itemRenderer ? itemRenderer(item) : createElement(Highlighter, {
      autoEscape: true,
      searchWords: [inputValue || ''],
      textToHighlight: defaultItemRenderer(item)
    })));
  }))));
};

export { CUIAutoComplete };
//# sourceMappingURL=chakra-ui-autocomplete.esm.js.map
