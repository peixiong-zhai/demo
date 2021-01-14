<template>
  <div>
    <div class="tableBox">
      <el-table :data="tableData" stripe style="width: 70%">
        <el-table-column prop="code" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="tel" label="电话"> </el-table-column>
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button
              @click="changeRow(scope.row, scope.$index, '编辑')"
              size="mini"
              type="primary"
              >编辑</el-button
            >
            <el-button
              @click="changeRow(tableData, '', '新增')"
              size="mini"
              type="success"
              >新增</el-button
            >
            <el-button
              @click="changeRow(tableData, scope.$index, '删除')"
              size="mini"
              type="danger"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加人员" :visible.sync="dialogFormVisible">
		<!-- 验证表单需要绑定ref -->
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="序号" :label-width="formLabelWidth" prop="code">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth" prop="tel">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
       <!-- 注意：这里的传参必须用单引号括起来 -->
        <el-button type="primary" @click="editFun('form')">确 定</el-button>  
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addTable",
  data() {
    return {
      tableData: [{ code: "1", name: "小王", address: "北京", tel: "1235454" }],
      form: {
        //在新增表单的时候form里面必须声明内部属性，否则会报错
        code: "",
        name: "",
        address: "",
        tel: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "100px",
      rules: {
        code: [
          {
            required: true,
            message: "请输入编号",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur",
          },
        ],
        tel: [
          {
            required: true,
            message: "请输入联系电话",
            trigger: "blur",
          },
          {
            pattern: /^(?:13\d|15\d|14\d|16\d|19\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})+$/,
            max: 11,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    init() {
      //初始化表单
      this.form.code = "",
      this.form.name = "",
      this.form.address = "",
      this.form.tel = ""
    },
    editFun(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.tableData.push(this.form);
          this.dialogFormVisible = false;
        }
      });
    },
    changeRow(item, index, type) {
      if (type == "编辑") {
        this.init();
        this.form = item;
        this.dialogFormVisible = true;
      } else if (type == "删除") {
        this.$confirm("您确定要删除吗, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(
            () => {
              item.splice(index, 1); //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目 arr.splice(2,1,"William")
            } //第一个参数传数组的index是哪个删除哪个数组元素，第二个参数表示删除几个元素，如果删除0个，第一个参数就是添加的元素的index
          ) //第三个参数可以是一个数组，也可以是多个需要添加的数组元素
          .catch(() => {
            //已经取消的提示
            this.$message.info("已经取消删除");
          });
      } else if (type == "新增") {
        this.init();
        this.dialogFormVisible = true;
      }
    },
  },
};
</script>

<style>
</style>
