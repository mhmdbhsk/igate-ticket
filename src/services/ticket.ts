import axiosInstance from '@/configs/axios-interceptors';
import { CreateTicketPayload } from '@/dto/TicketDto';

const TicketService = {
  getTicketsById: async (id: string) => {
    const response = await axiosInstance({
      url: `/${process.env.NEXT_PUBLIC_AIRTABLE_BASE}/ticket/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
      },
    });

    return response.data;
  },

  getYearOption: async (id: string) => {
    const response = await axiosInstance({
      url: `/${process.env.NEXT_PUBLIC_AIRTABLE_BASE}/ticket/${id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
      },
    });

    return response.data;
  },

  createTicket: async (data: CreateTicketPayload) => {
    const response = await axiosInstance({
      url: `/${process.env.NEXT_PUBLIC_AIRTABLE_BASE}/ticket`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: {
        records: [
          {
            fields: {
              name: data.name,
              email: data.email,
              year: data.year,
              paymentProof: [
                {
                  url: data.paymentProof,
                },
              ],
            },
          },
        ],
      },
    });

    return response;
  },
};

export default TicketService;
