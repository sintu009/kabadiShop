import { UserCheck, MapPin, Phone, Mail } from "lucide-react";

export default function ScrapBoy() {
    const scrapBoys = [
        { id: 1, name: "Rajesh Kumar", phone: "+91 98765 43210", email: "rajesh@example.com", area: "North Delhi", status: "Active", orders: 45 },
        { id: 2, name: "Amit Singh", phone: "+91 98765 43211", email: "amit@example.com", area: "South Delhi", status: "Active", orders: 38 },
        { id: 3, name: "Suresh Yadav", phone: "+91 98765 43212", email: "suresh@example.com", area: "East Delhi", status: "Inactive", orders: 22 },
        { id: 4, name: "Vikram Sharma", phone: "+91 98765 43213", email: "vikram@example.com", area: "West Delhi", status: "Active", orders: 51 },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Scrap Boys</h1>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Scrap Boy</button>
            </div>

            <div className="grid gap-6">
                {scrapBoys.map((boy) => (
                    <div key={boy.id} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {boy.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{boy.name}</h3>
                                    <div className="flex flex-col gap-1 mt-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Phone size={16} />
                                            <span>{boy.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Mail size={16} />
                                            <span>{boy.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            <span>{boy.area}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`px-3 py-1 rounded-full text-sm ${boy.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                    {boy.status}
                                </span>
                                <p className="mt-4 text-sm text-gray-600">Total Orders: <span className="font-bold text-gray-900">{boy.orders}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
