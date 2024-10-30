import { Users } from 'lucide-react';

const suggestions = [
  {
    id: '1',
    name: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Digital Artist & Designer'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Software Engineer'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Travel Photographer'
  }
];

export function Sidebar() {
  return (
    <div className="w-80 p-4">
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-5 w-5 text-indigo-600" />
          <h2 className="font-semibold">Suggested Connections</h2>
        </div>
        
        <div className="space-y-4">
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-start space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.bio}</p>
                <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}