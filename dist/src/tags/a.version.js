"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const index_1 = require("../index");
class ArgumentsVersion extends index_1.Tag {
    constructor(client, store, file, directory) {
        super(client, store, file, directory, {
            action: false,
            enabled: true,
        });
    }
    run() {
        return index_1.version;
    }
}
exports.default = ArgumentsVersion;
