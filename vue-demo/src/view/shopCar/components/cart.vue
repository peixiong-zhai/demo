<template>
    <div>
        <h4>已选商品</h4>
        <el-table
      :data="cartProducts"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        >
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
       <el-button type="primary" size="mini" @click="delProduct(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
import { mapGetters,mapActions} from "vuex";
export default {
  name: 'cart',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['cartProducts'])
    },
    methods:{
        ...mapActions(['delProduct'])
    }
};
</script>