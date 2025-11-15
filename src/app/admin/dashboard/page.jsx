// app/admin/dashboard/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const t = localStorage.getItem("admin_token");
    if (!t) {
      router.push("/admin/login");
    } else {
      setToken(t);
    }
  }, [router]);

  useEffect(() => {
    if (token) fetchData();
    // eslint-disable-next-line
  }, [token, page, search, stateFilter, statusFilter]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });
      if (search) params.append("search", search);
      if (stateFilter) params.append("state", stateFilter);
      if (statusFilter) params.append("status", statusFilter);

      const res = await fetch(`/api/admin/meetings?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("admin_token");
          router.push("/admin/login");
        }
        throw new Error(data.error || "Fetch failed");
      }
      setRows(data.data);
      setTotal(data.total);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const setStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/admin/meetings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      fetchData();
    } catch (err) {
      alert("Error updating status");
      console.error(err);
    }
  };

  const remove = async (id) => {
    if (!confirm("Delete this meeting?")) return;
    try {
      const res = await fetch(`/api/admin/meetings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      fetchData();
    } catch (err) {
      alert("Error deleting");
      console.error(err);
    }
  };

  const exportCSV = () => {
    const csv = [
      [
        "ID",
        "Name",
        "Phone",
        "State",
        "Investment",
        "Date",
        "Time",
        "Status",
        "Created At",
      ],
      ...rows.map((r) => [
        r.id,
        r.full_name,
        r.phone,
        r.state,
        r.investment,
        r.meeting_date,
        r.meeting_time,
        r.status,
        r.created_at,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `meetings_page${page}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              localStorage.removeItem("admin_token");
              router.push("/admin/login");
            }}
            className="px-3 py-2 border rounded"
          >
            Logout
          </button>
          <button
            onClick={exportCSV}
            className="px-3 py-2 bg-amber-600 text-white rounded"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name/phone/investment"
          className="p-2 border rounded w-96"
        />
        <input
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          placeholder="Filter state (exact)"
          className="p-2 border rounded"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All status</option>
          <option value="pending">pending</option>
          <option value="confirmed">confirmed</option>
          <option value="cancelled">cancelled</option>
        </select>
        <button
          onClick={() => {
            setPage(1);
            fetchData();
          }}
          className="px-3 py-2 bg-amber-600 text-white rounded"
        >
          Apply
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="text-left border-b">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">State</th>
              <th className="p-3">Investment</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="p-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={9} className="p-6 text-center">
                  No records
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{r.id}</td>
                  <td className="p-3">{r.full_name}</td>
                  <td className="p-3">{r.phone}</td>
                  <td className="p-3">{r.state}</td>
                  <td className="p-3">{r.investment}</td>
                  <td className="p-3">{r.meeting_date}</td>
                  <td className="p-3">{r.meeting_time}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded ${
                        r.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : r.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => setStatus(r.id, "confirmed")}
                      className="px-2 py-1 bg-green-600 text-white rounded"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setStatus(r.id, "cancelled")}
                      className="px-2 py-1 bg-red-600 text-white rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => remove(r.id)}
                      className="px-2 py-1 border rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div>
          Showing {rows.length} of {total}
        </div>
        <div className="space-x-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 border rounded"
          >
            Prev
          </button>
          <span>Page {page}</span>
          <button
            disabled={page * pageSize >= total}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
