import { useState } from "react";
import { useForm } from "@inertiajs/react";
import FormComponent from "./Components/FormComponent";
import DashboardLayout from "@/Pages/Dashboard/DashboardLayout";

export default function CreateUser() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.store"));
    };

    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow p-6 ">
                <div className="bg-gray-100 px-4 py-3 rounded-t-lg border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Create User
                    </h2>
                </div>
                <div className="border border-gray-100 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <FormComponent
                                data={data}
                                setData={setData}
                                errors={errors}
                                isCreate={true}
                            />
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                            >
                                Create User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}