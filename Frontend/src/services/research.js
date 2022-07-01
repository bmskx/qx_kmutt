import http from "./http-common";
import qs from "qs";
import i18n from "i18next";

// Research APIs
export default new (class ResearchService {
  // Get all researches
  async getResearches(pageSize) {
    return [
      {
        id: 1,
        attributes: {
          slug: "quantographer-ibmq",
          title:
            "Quantographer: ซอฟต์แวร์แก้ไขวงจรควอนตัมสำหรับสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ",
          description:
            "ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้",
          cover: {
            data: {
              id: 16,
              attributes: {
                url: "/uploads/1656252653335_1a3a0a4190.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "QuantumCircuitEditor",
                },
              },
            ],
          },
        },
      },
      {
        id: 2,
        attributes: {
          slug: "quantographer-ibmq",
          title:
            "Quantographer: ซอฟต์แวร์แก้ไขวงจรควอนตัมสำหรับสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ",
          description:
            "ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้",
          cover: {
            data: {
              id: 16,
              attributes: {
                url: "/uploads/1656252653335_1a3a0a4190.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "QuantumCircuitEditor",
                },
              },
            ],
          },
        },
      },
      {
        id: 3,
        attributes: {
          slug: "quantographer-ibmq",
          title:
            "Quantographer: ซอฟต์แวร์แก้ไขวงจรควอนตัมสำหรับสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ",
          description:
            "ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้",
          cover: {
            data: {
              id: 16,
              attributes: {
                url: "/uploads/1656252653335_1a3a0a4190.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "QuantumCircuitEditor",
                },
              },
            ],
          },
        },
      },
      {
        id: 4,
        attributes: {
          slug: "quantographer-ibmq",
          title:
            "Quantographer: ซอฟต์แวร์แก้ไขวงจรควอนตัมสำหรับสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ",
          description:
            "ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้",
          cover: {
            data: {
              id: 16,
              attributes: {
                url: "/uploads/1656252653335_1a3a0a4190.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "QuantumCircuitEditor",
                },
              },
            ],
          },
        },
      },
      {
        id: 5,
        attributes: {
          slug: "quantographer-ibmq",
          title:
            "Quantographer: ซอฟต์แวร์แก้ไขวงจรควอนตัมสำหรับสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ",
          description:
            "ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้",
          cover: {
            data: {
              id: 16,
              attributes: {
                url: "/uploads/1656252653335_1a3a0a4190.jpg",
              },
            },
          },
          categories: {
            data: [
              {
                id: 4,
                attributes: {
                  name: "QuantumCircuitEditor",
                },
              },
            ],
          },
        },
      },
    ];
    // const query = qs.stringify(
    //   {
    //     fields: ["slug", "title", "description"],
    //     populate: {
    //       cover: {
    //         fields: ["url"],
    //       },
    //       categories: {
    //         fields: ["name"],
    //       },
    //     },
    //     locale: i18n.language,
    //     pagination: {
    //       page: 1,
    //       pageSize: pageSize,
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );

    // return await http
    //   .get("/researches?" + query)
    //   .then((response) => {
    //     return response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  // Get research by slug
  async getResearchBySlug(slug) {
    return {
      id: 1,
      attributes: {
        slug: "quantographer-ibmq",
        title:
          "Quantographer: ซอฟต์แวร์แก้ไขวงจรควอนตัมสำหรับสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ",
        description:
          "ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้",
        content:
          '<p><span style="background-color:transparent;color:#595959;">ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้ โดยซอฟต์แวร์ที่ทีมผู้พัฒนาได้จัดทำขึ้นนั้นมีระบบแนะนำสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ เพื่อช่วยให้ผู้ใช้สามารถค้นหาระบบที่เหมาะสมกับวงจรนั้นๆ ซึ่งจะแสดงแผนภาพลำดับการทำงานออกมาให้ผู้ใช้ได้เห็นก่อนที่จะนำไปสั่งการบนเครื่องคอมพิวเตอร์ควอนตัมนั้นผ่านการใช้ความสามารถของไลบรารี Qiskit</span></p><p>&nbsp;</p><p><span style="background-color:transparent;color:#595959;">ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้ โดยซอฟต์แวร์ที่ทีมผู้พัฒนาได้จัดทำขึ้นนั้นมีระบบแนะนำสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ เพื่อช่วยให้ผู้ใช้สามารถค้นหาระบบที่เหมาะสมกับวงจรนั้นๆ ซึ่งจะแสดงแผนภาพลำดับการทำงานออกมาให้ผู้ใช้ได้เห็นก่อนที่จะนำไปสั่งการบนเครื่องคอมพิวเตอร์ควอนตัมนั้นผ่านการใช้ความสามารถของไลบรารี Qiskit</span></p><p>&nbsp;</p><p><span style="background-color:transparent;color:#595959;">ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้ โดยซอฟต์แวร์ที่ทีมผู้พัฒนาได้จัดทำขึ้นนั้นมีระบบแนะนำสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ เพื่อช่วยให้ผู้ใช้สามารถค้นหาระบบที่เหมาะสมกับวงจรนั้นๆ ซึ่งจะแสดงแผนภาพลำดับการทำงานออกมาให้ผู้ใช้ได้เห็นก่อนที่จะนำไปสั่งการบนเครื่องคอมพิวเตอร์ควอนตัมนั้นผ่านการใช้ความสามารถของไลบรารี Qiskit</span></p><p>&nbsp;</p><p><span style="background-color:transparent;color:#595959;">ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้ โดยซอฟต์แวร์ที่ทีมผู้พัฒนาได้จัดทำขึ้นนั้นมีระบบแนะนำสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ เพื่อช่วยให้ผู้ใช้สามารถค้นหาระบบที่เหมาะสมกับวงจรนั้นๆ ซึ่งจะแสดงแผนภาพลำดับการทำงานออกมาให้ผู้ใช้ได้เห็นก่อนที่จะนำไปสั่งการบนเครื่องคอมพิวเตอร์ควอนตัมนั้นผ่านการใช้ความสามารถของไลบรารี Qiskit</span></p><p>&nbsp;</p><p><span style="background-color:transparent;color:#595959;">ผู้พัฒนามีเป้าหมายที่จะพัฒนาซอฟต์แวร์แก้ไขวงจรควอนตัมที่ผู้ใช้สามารถสร้าง วิเคราะห์ ปรับปรุงวงจรควอนตัม และเลือกสถาปัตยกรรมคอมพิวเตอร์ควอนตัมสำหรับวงจรนั้นได้ โดยซอฟต์แวร์ที่ทีมผู้พัฒนาได้จัดทำขึ้นนั้นมีระบบแนะนำสถาปัตยกรรมคอมพิวเตอร์ควอนตัมของ IBMQ เพื่อช่วยให้ผู้ใช้สามารถค้นหาระบบที่เหมาะสมกับวงจรนั้นๆ ซึ่งจะแสดงแผนภาพลำดับการทำงานออกมาให้ผู้ใช้ได้เห็นก่อนที่จะนำไปสั่งการบนเครื่องคอมพิวเตอร์ควอนตัมนั้นผ่านการใช้ความสามารถของไลบรารี Qiskit</span></p>',
        research_database_url: "https://strapi.io/",
        createdAt: "2022-06-26T14:12:05.608Z",
        updatedAt: "2022-06-26T14:13:21.689Z",
        publishedAt: "2022-06-26T14:13:21.683Z",
        locale: "th",
        cover: {
          data: {
            id: 16,
            attributes: {
              url: "/uploads/1656252653335_1a3a0a4190.jpg",
            },
          },
        },
        categories: {
          data: [
            {
              id: 4,
              attributes: {
                name: "QuantumCircuitEditor",
              },
            },
          ],
        },
        tags: {
          data: [
            {
              id: 11,
              attributes: {
                name: "QuantumCircuitEditor",
              },
            },
            {
              id: 12,
              attributes: {
                name: "Qiskit",
              },
            },
          ],
        },
        authors: {
          data: [
            {
              id: 21,
              attributes: {
                firstname: "สุเทพ",
                lastname: "จันทร์ชูผล",
              },
            },
            {
              id: 23,
              attributes: {
                firstname: "เรืองวิทย์",
                lastname: "ศรีอำไพวิวัฒน์",
              },
            },
            {
              id: 25,
              attributes: {
                firstname: "กิตติพันธ์",
                lastname: "ชื่นบุญเพิ่ม",
              },
            },
          ],
        },
      },
    };
    // const query = qs.stringify(
    //   {
    //     filters: {
    //       slug: {
    //         $eq: slug,
    //       },
    //     },
    //     populate: {
    //       cover: {
    //         fields: ["url"],
    //       },
    //       categories: {
    //         fields: ["name"],
    //       },
    //       tags: {
    //         fields: ["name"],
    //       },
    //       authors: {
    //         fields: ["firstname", "lastname"],
    //       },
    //     },
    //   },
    //   {
    //     encodeValuesOnly: true,
    //   }
    // );

    // return await http
    //   .get("/researches?" + query)
    //   .then((response) => {
    //     return response.data.data[0];
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
})();
