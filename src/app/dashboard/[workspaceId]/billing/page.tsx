"use client";

import { useEffect, useState } from "react";
import { getPaymentInfo } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Loader, CreditCard, CheckCircle, XCircle } from "lucide-react";

const BillingPage = () => {
  const [payment, setPayment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        const data = await getPaymentInfo();
        setPayment(data);
      } catch (err) {
        setError("Failed to load payment info.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentInfo();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#181818]">
        <Loader className="animate-spin w-10 h-10 text-[#6D28D9]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  const plan = payment?.data?.subscription?.plan || "Free";
  const price = plan === "PRO" ? 99 : 0;

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-[#1C1C1E] rounded-3xl shadow-2xl text-white relative grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
      {/* Left Side */}
      <div className="flex flex-col gap-6">
        <div className="bg-[#2A2A2E] p-6 rounded-2xl shadow-lg min-h-[160px] flex flex-col justify-between">
          <h3 className="text-lg font-semibold text-[#F1F1F1]">{plan} Plan</h3>
          <p className="text-gray-400 text-sm">${price}/Month</p>
          {plan === "PRO" ? (
            <Button
              variant="destructive"
              className="text-sm flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-700 transition self-start"
            >
              <XCircle size={18} /> Cancel Plan
            </Button>
          ) : (
            <Button className="text-sm flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6D28D9] hover:bg-[#5B21B6] transition self-start">
              <CheckCircle size={18} /> Upgrade to PRO
            </Button>
          )}
        </div>

        <div className="bg-[#2A2A2E] p-6 rounded-2xl flex items-center gap-4 shadow-lg min-h-[160px]">
          <CreditCard size={40} className="text-[#6D28D9]" />
          <div>
            <h3 className="text-lg font-semibold text-[#F1F1F1]">
              Payment Method
            </h3>
            <p className="text-gray-400 text-sm">
              {payment?.data?.paymentMethod || "No payment method added"}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[#2A2A2E] p-6 rounded-2xl shadow-lg min-h-[336px] flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-[#F1F1F1]">
          Billing History
        </h3>
        <p className="text-gray-400 text-sm">No transactions yet</p>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#8c52ff] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#5e17eb] opacity-20 blur-3xl rounded-full"></div>
    </div>
  );
};

export default BillingPage;
