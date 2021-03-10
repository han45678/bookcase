<template>
  <div class="home">
    <Vheader />
    <main id="main">
      <div class="title">
        <h1>書架管理</h1>
        <el-button
          type="success"
          icon="el-icon-plus"
          circle
          @click="add"
        ></el-button>
      </div>
      <table id="info_table">
        <thead>
          <tr>
            <td>項次</td>
            <td>年級</td>
            <td>順序</td>
            <td>課本標題</td>
            <td>課本編號</td>
            <td>PC版本</td>
            <td>更新日期</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in info" :key="index">
            <td data-th="項次">{{ item.id }}</td>
            <td data-th="年級">{{ item.grade }}</td>
            <td data-th="順序">{{ item.grade_code }}</td>
            <td data-th="課本標題">{{ item.title }}</td>
            <td data-th="課本編號">{{ item.order }}</td>
            <td data-th="PC版本">{{ item.WebVersion }}</td>
            <td data-th="更新日期">{{ item.update_time }}</td>
            <td data-th="操作">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="edit(index)"
              ></el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <div id="pop-up" :class="{ active: popUp }">
      <div class="content">
        <div class="title">
          <h1 v-if="modify">新增課本</h1>
          <h1 v-else>修改課本</h1>
        </div>
        <el-row :gutter="10">
          <!--▼教育程度選擇-->
          <el-col :sm="24" :md="8">
            <el-select
              v-model="add_info.education_level"
              placeholder="教育程度"
            >
              <el-option
                v-for="item in education_level_menu"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <!--▲教育程度選擇-->

          <!--▼年級選擇-->
          <el-col
            v-if="this.add_info.education_level == '國小'"
            :sm="24"
            :md="8"
          >
            <el-select v-model="add_info.grade" placeholder="請選擇國小年級">
              <el-option
                v-for="item in elementary_grade"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col
            v-else-if="this.add_info.education_level == '國中'"
            :sm="24"
            :md="8"
          >
            <el-select v-model="add_info.grade" placeholder="請選擇國中年級">
              <el-option
                v-for="item in secondary_grade"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col
            v-else-if="this.add_info.education_level == '高中'"
            :sm="24"
            :md="8"
          >
            <el-select v-model="add_info.grade" placeholder="請選擇高中年級">
              <el-option
                v-for="item in high_grade"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col
            v-else-if="this.add_info.education_level == '高職'"
            :sm="24"
            :md="8"
          >
            <el-select v-model="add_info.grade" placeholder="請選擇高職年級">
              <el-option
                v-for="item in highe_grade"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col v-else :sm="24" :md="8">
            <el-select
              v-model="add_info.grade"
              disabled
              placeholder="年級"
            ></el-select>
          </el-col>
          <!--▲年級選擇-->

          <el-col :sm="24" :md="8">
            <el-select v-model="add_info.species" placeholder="種類">
              <el-option
                v-for="item in species_menu"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-input
              v-model="add_info.subject"
              placeholder="請輸入科目"
            ></el-input>
          </el-col>
          <el-col :sm="24" :md="12">
            <el-input
              v-model="add_info.order"
              placeholder="請輸入編號"
            ></el-input>
          </el-col>
          <el-col :sm="24" :md="20">
            <el-input
              v-model="add_info.title"
              placeholder="請輸入課本標題"
            ></el-input>
          </el-col>
          <el-col :sm="24" :md="4">
            <el-input
              v-model="add_info.grade_code"
              placeholder="排序號"
            ></el-input>
          </el-col>
          <el-col :sm="24" :md="24">
            <el-input v-model="add_info.cover"
              ><template slot="prepend">http://</template></el-input
            >
          </el-col>
          <el-col :sm="24" :md="20">
            <el-input v-model="add_info.Web" placeholder="請輸入網頁版"
              ><template slot="prepend">http://</template></el-input
            >
          </el-col>
          <el-col :sm="24" :md="4">
            <el-input
              v-model="add_info.WebVersion"
              placeholder="電子書版號"
            ></el-input>
          </el-col>
          <el-col :sm="24" :md="20">
            <el-input v-model="add_info.computer" placeholder="請輸入電腦版"
              ><template slot="prepend">http://</template></el-input
            >
          </el-col>
          <el-col :sm="24" :md="4">
            <el-input
              v-model="add_info.computerVersion"
              placeholder="電子書版號"
            ></el-input>
          </el-col>
          <el-col :sm="24" :md="20">
            <el-input v-model="add_info.Mobile" placeholder="請輸入行動版本"
              ><template slot="prepend">http://</template></el-input
            >
          </el-col>
          <el-col :sm="24" :md="4">
            <el-input
              v-model="add_info.MobileVersion"
              placeholder="電子書版號"
            ></el-input>
          </el-col>
        </el-row>
        <div id="delete" :class="{ active: delete_win }">
          <div class="button">
            <h3>確定要刪除嗎!?</h3>
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="confirm_vdelete"
              >刪除</el-button
            >
            <el-button
              type="info"
              @click="delete_win = !delete_win"
              icon="el-icon-circle-close"
              >取消</el-button
            >
          </div>
        </div>
        <el-row>
          <el-button type="danger" v-if="!modify" @click="vdelete">
            <i class="el-icon-delete"></i>刪除
          </el-button>

          <el-button type="primary" v-if="!modify" @click="confirm_edit">
            <i class="el-icon-upload"></i>儲存
          </el-button>

          <el-button type="success" v-if="modify" @click="confirm_add">
            <i class="el-icon-check"></i>新增
          </el-button>

          <el-button type="info" @click="cancel">
            <i class="el-icon-circle-close"></i>取消
          </el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Vheader from "@/components/header.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      delete_win: false,
      modify: true,
      popUp: false,
      info: [
        // {
        //   id: "test",
        //   grade_code: "",
        //   education_level: "",
        //   grade: "",
        //   species: "",
        //   subject: "",
        //   number: "",
        //   title: "",
        //   order: "",
        //   cover: "",
        //   Web: "",
        //   WebVersion: "",
        //   computer: "",
        //   computerVersion: "",
        //   Mobile: "",
        //   MobileVersion: "",
        //   update_time: "",
        // },
      ],
      education_level_menu: [
        {
          value: "國小",
          label: "國小",
        },
        {
          value: "國中",
          label: "國中",
        },
        {
          value: "高中",
          label: "高中",
        },
        {
          value: "高職",
          label: "高職",
        },
      ],
      elementary_grade: [
        {
          value: "小一",
          label: "小一",
        },
        {
          value: "小二",
          label: "小二",
        },
        {
          value: "小三",
          label: "小三",
        },
        {
          value: "小四",
          label: "小四",
        },
        {
          value: "小五",
          label: "小五",
        },
        {
          value: "小六",
          label: "小六",
        },
      ],
      secondary_grade: [
        {
          value: "國一",
          label: "國一",
        },
        {
          value: "國二",
          label: "國二",
        },
        {
          value: "國三",
          label: "國三",
        },
      ],
      high_grade: [
        {
          value: "高一",
          label: "高一",
        },
        {
          value: "高二",
          label: "高二",
        },
        {
          value: "高三",
          label: "高三",
        },
      ],
      highe_grade: [
        {
          value: "高一",
          label: "高一",
        },
        {
          value: "高二",
          label: "高二",
        },
        {
          value: "高三",
          label: "高三",
        },
      ],
      species_menu: [
        {
          value: "H5電子書",
          label: "H5電子書",
        },
        {
          value: "Flash電子書",
          label: "Flash電子書",
        },
      ],
      add_info: {
        grade_code: "",
        education_level: "",
        grade: "",
        species: "",
        subject: "",
        number: "",
        title: "",
        order: "",
        cover: "",
        Web: "",
        WebVersion: "",
        computer: "",
        computerVersion: "",
        Mobile: "",
        MobileVersion: "",
        id: 0,
        update_time: "2020-11-16T17:50:20",
      },
    };
  },
  async created() {
    await this.loadPage();
  },
  methods: {
    async loadPage() {
      let res = await axios.get("http://127.0.0.1:3000/posts");
      this.info = res.data;
    },
    clear_form() {
      this.add_info = {
        update_time: "2020-11-16T17:50:20",
      };
    },
    add() {
      //打開新增視窗
      this.clear_form();
      this.modify = true;
      this.popUp = !this.popUp;
    },
    clear() {
      //清除
      this.add_info.education_level = "";
      this.add_info.grade = "";
      this.add_info.species = "";
      this.add_info.subject = "";
      this.add_info.number = "";
      this.add_info.title = "";
      this.add_info.order = "";
      this.add_info.cover = "";
      this.add_info.Web = "";
      this.add_info.WebVersion = "";
      this.add_info.computer = "";
      this.add_info.computerVersion = "";
      this.add_info.Mobile = "";
      this.add_info.MobileVersion = "";
    },
    cancel() {
      //取消並清除
      this.popUp = !this.popUp;
      this.clear();
    },
    async confirm_add() {
      //確認新增
      await axios.post(`http://127.0.0.1:3000/posts`, {
        ...this.add_info,
      });
      this.popUp = !this.popUp;
      await this.loadPage();
      this.$swal("新增完成", "您新增了一筆資料", "success");
    },
    edit(index) {
      //修改
      this.add_info.education_level = this.info[index].education_level;
      this.add_info.grade = this.info[index].grade;
      this.add_info.grade_code = this.info[index].grade_code;
      this.add_info.species = this.info[index].species;
      this.add_info.subject = this.info[index].subject;
      this.add_info.number = this.info[index].number;
      this.add_info.title = this.info[index].title;
      this.add_info.order = this.info[index].order;
      this.add_info.cover = this.info[index].cover;
      this.add_info.Web = this.info[index].Web;
      this.add_info.WebVersion = this.info[index].WebVersion;
      this.add_info.computer = this.info[index].computer;
      this.add_info.computerVersion = this.info[index].computerVersion;
      this.add_info.Mobile = this.info[index].Mobile;
      this.add_info.MobileVersion = this.info[index].MobileVersion;
      this.add_info.id = this.info[index].id;
      this.popUp = !this.popUp;
      this.modify = false;
    },
    async confirm_edit() {
      await axios.put(`http://127.0.0.1:3000/posts/${this.add_info.id}`, {
        ...this.add_info,
      });
      this.popUp = !this.popUp;
      await this.loadPage();
      this.delete_win = false;
      this.$swal("修改完成", "您修改了一筆資料", "success");
    },
    vdelete() {
      this.delete_win = true;
    },
    async confirm_vdelete() {
      await axios.delete(`http://127.0.0.1:3000/posts/${this.add_info.id}`, {
        ...this.add_info,
      });
      this.popUp = !this.popUp;
      this.delete_win = false;
      await this.loadPage();
      this.$swal("刪除成功!", "您刪除了一筆資料", "warning");
    },
  },
  components: {
    Vheader,
  },
};
</script>
