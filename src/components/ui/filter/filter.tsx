import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Input } from '@/components/ui/input';
import { IconFilter } from '@/components/ui/icons';

const FilterAndSearch = ({ searchValue, setSearchValue, filter, setFilter }) => {
  const handleSetSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectFilter = (option) => {
    setFilter(option);
  };

  const filterOptions = ['All', 'Liked'];

  return (
    <div className="relative mb-4 flex w-full">
      <Input
        type="text"
        placeholder="Search by name..."
        value={searchValue}
        onChange={handleSetSearchValue}
        className="mb-4 text-white"
      />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="bg-absoluteBlack-hover p-s8 flex items-center rounded-primary">
          <IconFilter className="mb-4 ml-2 h-[24px] w-[24px]" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="w-s136 bg-absoluteBlack-hover absolute z-10 flex flex-col self-center rounded-primary border-none bg-backgroundColor-starwargray p-2 shadow-lg">
          {filterOptions.map((option) => (
            <DropdownMenu.Item
              key={option}
              onClick={() => handleSelectFilter(option)}
              className="text-t8 hover:bg-absoluteWhite-hover hover:text-absoluteBlack-hover w-full cursor-pointer rounded-primary border-none px-1 py-1 text-right"
            >
              <p className="px-2 py-1 ">{option}</p>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default FilterAndSearch;
