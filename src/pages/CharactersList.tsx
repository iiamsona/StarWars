import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FilterAndSearch } from '@/components/ui/filter';

const CharacterInfo = () => {
  const [people, setPeople] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [likedCards, setLikedCards] = useState<number[]>([]);
  const [filter, setFilter] = useState('All');

  const getPeople = () => {
    return axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        setPeople(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  useEffect(() => {
    getPeople();
  }, []);

  const filteredPeople = useMemo(() => {
    let filtered = people.filter((person) =>
      person.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    if (filter === 'Liked') {
      filtered = filtered.filter((_, index) => likedCards.includes(index));
    }

    return filtered;
  }, [people, searchValue, filter, likedCards]);

  const toggleLiked = (index: number) => {
    setLikedCards(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
    );
  };

  return (
    <div className="bg-primaryBig flex h-[100vh] flex-col bg-cover bg-center">
      <h1 className="grid self-center">Star Wars Characters</h1>
      <div className="ml-2 w-48">
        <FilterAndSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {filteredPeople.map((person, index) => (
          <Card key={index} className="mb-4">
            <CardContent>
              <CardDescription>
                <CardHeader>
                  <CardTitle>
                    <p className="fontWeight-t2-semibold text-[25px] text-white">{person.name}</p>
                  </CardTitle>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <p className="fontWeight-t2-semibold font-t4 text-[18px] text-white">
                    gender {person.gender}
                  </p>
                  <button
                    onClick={() => toggleLiked(index)}
                    className="rounded-full p-2 transition-colors"
                  >
                    <div className={`relative h-[90px] w-[90px]`}>
                      <div
                        className={`absolute left-[50px] top-0 h-[80px] w-[50px]
                          ${likedCards.includes(index) ? 'before:bg-red-500' : 'before:bg-white'} 
                          before:rounded-r-[50px]before:rounded-b-0 before:rounded-l-0 before:absolute before:left-0 
                          before:top-0 before:h-full before:w-full before:origin-[0_100%] 
before:-rotate-45 before:rounded-t-[50px] 
                          before:content-['']`}
                      />
                      <div
                        className={`absolute left-0 top-0 h-[80px] w-[50px] 
                          ${likedCards.includes(index) ? 'after:bg-red-500' : 'after:bg-white'} 
                          after:rounded-b-0 after:rounded-l-0 after:absolute after:left-0 
                          after:top-0 after:h-full after:w-full after:origin-[100%_100%] after:rotate-45 
after:rounded-r-[50px] after:rounded-t-[50px] 
                          after:content-['']`}
                      />
                    </div>
                  </button>
                </CardFooter>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CharacterInfo;
