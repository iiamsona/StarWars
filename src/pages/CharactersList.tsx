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
import { FilterAndSearch } from '@/components/ui/filter'; // Adjust the path as needed

const CharacterInfo = () => {
  const [people, setPeople] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getPeople = () => {
    return axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log(response.data.results);
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
    return people.filter((person) =>
      person.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }, [people, searchValue]);

  return (
    <div className="bg-primaryBig flex h-[100vh] flex-col bg-cover bg-center">
      <h1 className="grid self-center">Star Wars Characters</h1>
      <div className="ml-2 w-48">
        <FilterAndSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {filteredPeople.map((person, index) => (
          <Card key={index} className="mb-4">
            <CardContent>
              <CardDescription>
                <CardHeader>
                  <CardTitle>
                    <p className="fontWeight-t2-semibold font-t4 text-white">{person.name}</p>
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <p className="fontWeight-t2-semibold font-t4 text-white">
                    gender {person.gender}
                  </p>
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
