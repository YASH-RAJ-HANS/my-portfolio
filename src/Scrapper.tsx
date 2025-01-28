import React, { useState } from 'react';
import axios from 'axios';

const UserDataScraper: React.FC = () => {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState<'leetcode' | 'codeforces' | 'codechef' | 'github'>('leetcode');
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    setError('');
    try {
      let response;
      switch (platform) {
        case 'leetcode':
          response = await axios.get(`https://leetcode.com/u/${username}/`);
          setUserData(response.data);
          break;
        case 'codeforces':
          response = await axios.get(`https://codeforces.com/api/user.info?handles=${username}`);
          setUserData(response.data);
          break;
        case 'codechef':
          response = await axios.get(`https://www.codechef.com/users/${username}`);
          setUserData(response.data);
          break;
        case 'github':
          response = await axios.get(`https://api.github.com/users/${username}`);
          setUserData(response.data);
          break;
        default:
          throw new Error('Invalid platform selected');
      }
    } catch (err) {
      setError('Error fetching data. Please check the username and platform.');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">User Data Scraper</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
        className="border p-2 mb-4"
      />
      <select value={platform} onChange={(e) => setPlatform(e.target.value as any)} className="border p-2 mb-4">
        <option value="leetcode">LeetCode</option>
        <option value="codeforces">Codeforces</option>
        <option value="codechef">CodeChef</option>
        <option value="github">GitHub</option>
      </select>
      <button onClick={handleScrape} className="bg-blue-600 text-white px-4 py-2 rounded">
        Scrape Data
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {userData && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">User Data:</h2>
          <pre className="bg-gray-900 p-4 rounded">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UserDataScraper;
