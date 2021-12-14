import mongoose from "mongoose";

class Service {
    constructor(model) {
        this.model = model;
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async get(query) {
        let {skip, limit} = query;

        skip = skip ? Number(skip) : 0;
        limit = limit ? Number(limit) : 100;

        console.log(query);
        try {
            let items = await this.model
                .find(query)
                .skip(skip)
                .limit(limit);
            return {
                error: false,
                statusCode: 200,
                data: items,
                length: items.length
            };
        }
        catch (errors) {
            console.log(errors);
            return {
                error: true,
                statusCode: 500,
                errors
            };
        }
    }

    async insert(data) {
      console.log(data);
        try {
            let item = await this.model.create(data);
            if (item)
                return {
                    error: false,
                    item
                };
        }   catch (error) {
            console.log("error", error);
            return {
                error: true,
                statusCode: 500,
                message: error.errmsg || "Unable to create item",
                errors: error.errors
            };
        }
    }

    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return {
                error: false,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                ...error
            };
        }
    }

    async delete(id) {
        console.log(id);
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item) return {
                error: true,
                statusCode: 404,
                message: "item not found"
            };

            return {
                error: false,
                deleted: true,
                statusCode: 202,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                ...error
            };
        }
    }
}

export default Service;
